import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Cookies from "js-cookie";

import route from "next/router";
import User from "../../model/User";

interface AuthContextProps {
    user?: User;
    loading?: boolean;
    loginGoogle?: () => Promise<void>;
    loginGithub?: () => Promise<void>;
    loginWithEmailAndPassword?: (email:string , password:string) => Promise<void>;
    createUserWithEmailAndPassword?: (email:string , password:string) => Promise<void>;
    logout?: () => Promise<void>;
}

// Cria o contexto, para no final da função ser exportado e poder ser compartilhado para todas as rotas

const AuthContext = createContext<AuthContextProps>({});

// Função que chama o token gerado pelo firebase para ocorrer o login

async function userNormal(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken();
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provedor: userFirebase.providerData[0].providerId,
        imagemUrl: userFirebase.photoURL
    }
}

// Função que seta os cookies na página, com o login e um tempo de expiração de 7 dias

function manageCookie(logger: boolean) {
    if (logger) {
        Cookies.set('Myrocket-admin-auth', logger, {
            expires: 7
        });
    } else {
        Cookies.remove('Myrocket-admin-auth');
    }
}

// Função que verifica se ocorreu o login de forma correta, se sim ele seta o cookie e o usuário com os dados do firebase

export function AuthProvider(props) {
    // Variavel que fala se a página ainda está carregando
    // Pois como todas as funções aqui exigem tempo de resposta, é preciso aguardar a resposta e retornar para o
    // usuário esse feedback
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User>(null);

    async function configureSection(userFirebase) {
        if (userFirebase?.email) {
            const userWithCookie = await userNormal(userFirebase);
            setUser(userWithCookie);
            manageCookie(true);
            setLoading(false);
            return user?.email
        } else {
            setUser(null);
            manageCookie(false);
            setLoading(false);
            return false
        }
    }

    //Função de login com o google, ele chama o provider do google, que o firebase fornece atraves do Oauth2
    // Note que ele chama a função criada acima e por parametro coloca o usuário logado que o firebase
    // retorna com os dados

    async function loginGoogle() {
        try {
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await configureSection(resp.user);
            route.push('/createprofile');
        } finally {
            setLoading(false);
        }
    };

    //Função de login com o github, ele chama o provider do google, que o firebase fornece atraves do Oauth2

    async function loginGithub() {
        try {
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GithubAuthProvider()
            )
            await configureSection(resp.user);
            route.push('/createprofile');
        } finally {
            setLoading(false);
        }
    };

    // Função de criar login com email e senha, funcionando exatamente igual
    async function createUserWithEmailAndPassword(email, password) {
        try {
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await configureSection(resp.user);
            route.push('/createprofile');
        } finally {
            setLoading(false);
        }
    };

     // Função de fazer login com email e senha, funcionando exatamente igual
    async function loginWithEmailAndPassword(email, password) {
        try {
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password); 
            await configureSection(resp.user);
            route.push('/createprofile');
        } finally {
            setLoading(false);
        }
    };

    // Função de fazer logout, chama a função de logout do proprio firebase e seta os cookies como nulo
    async function logout() {
        try {
            setLoading(true);
            await firebase.auth().signOut();
            await configureSection(null);
        } finally {
            setLoading(false);
        }
    }

    // Ainda usando a função de cookie da proprios biblioteca de cookie para tirar o cookie do firebase
    useEffect(() => {
        if (Cookies.get('Myrocket-admin-auth')) {
            const cancell = firebase.auth().onIdTokenChanged(configureSection);
            return () => cancell();
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            loginGoogle,
            loginGithub,
            loginWithEmailAndPassword,
            createUserWithEmailAndPassword,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

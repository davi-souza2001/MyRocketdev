import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Cookies from "js-cookie";

import route from "next/router";
import User from "../../model/User";

interface AuthContextProps {
    user?: User;
    loading?: boolean;
    loginGoogle?: () => Promise<void>;
    loginWithEmailAndPassword?: (email:string , password:string) => Promise<void>;
    createUserWithEmailAndPassword?: (email:string , password:string) => Promise<void>;
    logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

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

function manageCookie(logger: boolean) {
    if (logger) {
        Cookies.set('Myrocket-admin-auth', logger, {
            expires: 7
        });
    } else {
        Cookies.remove('Myrocket-admin-auth');
    }
}

export function AuthProvider(props) {
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

    async function createUserWithEmailAndPassword(email, password) {
        try {
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await configureSection(resp.user);
            route.push('/createprofile');
        } finally {
            setLoading(false);
        }
    };

    async function loginWithEmailAndPassword(email, password) {
        try {
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password); 
            await configureSection(resp.user);
            route.push('/createprofile');
        } finally {
            setLoading(false);
        }
    };

    async function logout() {
        try {
            setLoading(true);
            await firebase.auth().signOut();
            await configureSection(null);
        } finally {
            setLoading(false);
        }
    }

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
            loginWithEmailAndPassword,
            createUserWithEmailAndPassword,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

//Importações de Bibliotecas nativas do React, criadas e baixadas

import React, { useEffect, useState } from 'react';
import Image from "next/image";

import Icon from "../assets/img/austrolike.jpg";
import { IconPlus } from "../components/Icons";

import useAuth from '../data/hook/useAuth';
import useProfile from '../data/hook/useProfile';
import firebase from "../firebase/config";

import styles from "../styles/AddPost.module.css";

// Tipagem das variaveis

interface AddPostProps {
    name: string;
    linkComu: any;
}

export default function AddPost(props: AddPostProps) {
    // User pego do service do firebase, se o usuário não tiver feito autenticação ele será nulo
    const { user } = useAuth();
    // Lista de perfis vinda do firebase para facilitar o acesso a elas
    const { profileList } = useProfile();
    const [checkUser, setCheckUser] = useState(false);

    const [post, setPost] = useState("");

    // Função que sabe se o usuário faz parte da comunidade. Ele procura na 1°, 2° e 3° comunidade do usuário,
    // se ele fizer parte a função retorna true para a variavel setCheckUser e permite o usuário postar

    useEffect(() => {
        const alo = profileList.map((prof: any) => {
            if(user?.email == prof.email){
                if(prof.firstComum == props.linkComu || prof.secondComum == props.linkComu  || prof.thirdComum == props.linkComu){
                    setCheckUser(true);
                }
            }
        })
    }, [profileList, user, props.linkComu]);

    // Função para pegar texto do usuário e adicionar ao post. Ele checa se não é nulo e se o usuário tem login,
    // seguindo isso ele poderá fazer login.
    // No post ele guarda o que o usuário digitou, o email, nome, foto e o id da postagem.

    async function sub() {
        if(user){
            if (post == "") {
                alert("Parece que você ainda não digitou nada !")
            } else if (user?.email && checkUser) {
                const todoRef = firebase.database().ref(props.linkComu);
                const email = user.email;
                const name = user.name;
                const photo = user.imagemUrl;
                const idForList = Math.random();
                const list = {
                    idForList,
                    post,
                    email,
                    photo,
                    name
                };
                todoRef.push(list);
                setPost("");
            } else {
                alert("Opa, parece que você ainda não fez seu login ou não faz parte da comunidade");
            }
        } else{
            alert("Opa, parece que você ainda não fez seu login");
        }
    }

    return (
        <div className={styles.contentGeral}>
            <div className={styles.content}>
                <div className={styles.userSettings}>
                    <div className={styles.userImageAndName}>
                        <Image src={user ? user?.imagemUrl : Icon} width={40} height={35} alt="User image" />
                        <h4>{props.name}</h4>
                        <div className={styles.icon} onClick={sub}>
                            {IconPlus}
                        </div>
                    </div>
                    <input type="text" value={post} onChange={(e) => setPost(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

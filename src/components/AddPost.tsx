import React, { useEffect, useState } from 'react';
import Image from "next/image";

import Icon from "../assets/img/austrolike.jpg";
import { IconPlus } from "../components/Icons";

import useAuth from '../data/hook/useAuth';
import useProfile from '../data/hook/useProfile';
import firebase from "../firebase/config";

import styles from "../styles/AddPost.module.css";

interface AddPostProps {
    name: string;
    linkComu: any;
}

export default function AddPost(props: AddPostProps) {
    const { user } = useAuth();
    const { profileList } = useProfile();
    const [checkUser, setCheckUser] = useState(false);

    const [post, setPost] = useState("");

    useEffect(() => {
        const alo = profileList.map((e) => {
            if(e.firstComum == props.linkComu || e.secondComum == props.linkComu  || e.thirdComum == props.linkComu){
                console.log("ok")
                setCheckUser(true);
            }
        })
    }, [profileList, user, props.linkComu]);

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

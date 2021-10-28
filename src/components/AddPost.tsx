import React, { useState } from 'react';
import Image from "next/image";

import Icon from "../assets/img/austrolike.jpg";
import { IconPlus } from "../components/Icons";

import useAuth from '../data/hook/useAuth';
import firebase from "../firebase/config";

import styles from "../styles/AddPost.module.css";

interface AddPostProps {
    name: string;
    linkComu: any;
}

export default function AddPost(props: AddPostProps) {
    const { user } = useAuth();

    const [post, setPost] = useState("");

    async function sub() {
        await user?.email
        if(user?.email){
            const todoRef = firebase.database().ref(props.linkComu);
            const email = user.email;
            const name = user.name;
            const photo = user.imagemUrl;
            const idForList = Math.random()
            const list = {
                idForList,
                post,
                email,
                photo,
                name
            }
            todoRef.push(list);
        } else{
            alert("Opa, parece que você ainda não fez seu login")
        }
      }

    return (
        <div className={styles.contentGeral}>
            <div className={styles.content}>
                <div className={styles.userSettings}>
                    <div className={styles.userImageAndName}>
                        <Image src={user ? user?.imagemUrl : Icon} width={40} height={35} alt="User image"/>
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

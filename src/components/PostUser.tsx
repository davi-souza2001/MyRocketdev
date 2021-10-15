import React from 'react';
import Image from "next/image";

import useAuth from '../data/hook/useAuth';
import Icon from "../assets/img/austrolike.jpg";
import { IconStar, IconTrash } from "../components/Icons";

import styles from "../styles/PostUser.module.css";

interface PostUser {
    publi: any
}

export default function PostUser(props: PostUser){
    const { user } = useAuth();

    return (
        <div className={styles.contentGeral}>
            <div className={styles.content}>
                <p>{props.publi}</p>
                <div className={styles.userSettings}>
                    <div className={styles.userImageAndName}>
                        <Image src={user ? user?.imagemUrl : Icon} width={28} height={10}/>
                        <h4>Davi Souza</h4>
                    </div>
                    <div className={styles.contentIcons}>
                        <div className={styles.icon}>
                            {IconStar}
                        </div>
                        <div className={styles.icon}>
                            {IconTrash}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

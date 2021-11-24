import React, { useState } from 'react';
import Image from "next/image";

import Icon from "../assets/img/austrolike.jpg";
import { IconStar, IconTrash } from "../components/Icons";

import styles from "../styles/PostUser.module.css";

interface PostUser {
    publi: any;
    name: any;
    imageUser: any;
    trash: any;
    likeIcon: any;
    like?: any;
    likesCount: Object;
    children?: any;
    delete: any;
}

export default function PostUser(props: PostUser){

    // Seta as variaveis que vão ser usadas para dizer se a função apagar post será ativa, assim como a função de like
    const [trash, setTrash] = useState(props.trash);
    const [likeIcon, setLikeIcon] = useState(props.likeIcon);

    return (
        <div className={styles.contentGeral}>
            <div className={styles.content}>
                <p>{props.publi}</p>
                <div className={styles.userSettings}>
                    <div className={styles.userImageAndName}>
                        <Image src={props.imageUser ? props.imageUser : Icon} width={28} height={10}/>
                        <h4>{props.name}</h4>
                    </div>
                    <div className={styles.contentIcons}>
                        {likeIcon ?(
                            <div className={styles.icon} onClick={props.like}>
                                {props.children}
                            </div>
                        ): false}
                        <h5>{props.likesCount}</h5>
                        {trash ? (
                            <div className={styles.icon} onClick={props.delete}>
                                {IconTrash}
                            </div>
                        ): false}
                    </div>
                </div>
            </div>
        </div>
    )
}

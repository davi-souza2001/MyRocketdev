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
    delete: any;
}

export default function PostUser(props: PostUser){
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
                                {IconStar}
                            </div>
                        ): false}
                        {props.likesCount}
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

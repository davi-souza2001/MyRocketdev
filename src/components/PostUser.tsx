import React from 'react';
import Image from "next/image";

import useAuth from '../data/hook/useAuth';
import Icon from "../assets/img/austrolike.jpg"

import styles from "../styles/PostUser.module.css";

interface PostUser {
    
}

export default function PostUser(props: PostUser){
    const { user } = useAuth();

    return (
        <div className={styles.contentGeral}>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo vel eligendi ad, ipsum quas voluptatum reprehenderit quis facere aliquid blanditiis expedita dolores, illum consectetur rerum velit ut, cumque odit. Corporis.</p>
                <div className={styles.userSettings}>
                    <div className={styles.userImageAndName}>
                        <Image src={user ? user?.imagemUrl : Icon} width={28} height={10}/>
                        <h4>Davi Souza</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

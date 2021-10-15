import React from 'react';
import Image from "next/image";

import useAuth from '../data/hook/useAuth';
import Icon from "../assets/img/austrolike.jpg";
import { IconPlus } from "../components/Icons";

import styles from "../styles/AddPost.module.css";

interface AddPostProps {
    
}

export default function AddPost(props: AddPostProps) {
    const { user } = useAuth();

    return (
        <div className={styles.contentGeral}>
            <div className={styles.content}>
                <div className={styles.userSettings}>
                    <div className={styles.userImageAndName}>
                        <Image src={user ? user?.imagemUrl : Icon} width={40} height={35}/>
                        <h4>Davi Souza</h4>
                        <div className={styles.icon}>
                            {IconPlus}
                        </div>
                    </div>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

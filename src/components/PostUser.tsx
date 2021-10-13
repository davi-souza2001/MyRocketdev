import React, { ReactElement } from 'react';

import styles from "../styles/PostUser.module.css";

interface PostUser {
    
}

export default function PostUser(props: PostUser){
    return (
        <div className={styles.content}>
            <h2>Ola</h2>
        </div>
    )
}

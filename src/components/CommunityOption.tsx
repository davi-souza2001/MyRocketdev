import React, { ReactElement } from 'react';
import Image from "next/image";

import styles from "../styles/Main.module.css";

interface CommunityOption {
    image: any;
    tec : any;
    area: any;
}

export default function CommunityOption(props: CommunityOption) {
    return (
        <div className={styles.contentOption}>
            <div>
                <Image alt="astro" src={props.image} height={100} width={200} />
            </div>
            <div className={styles.framework}>
                <h3>{props.tec}</h3>
                <h5>{props.area}</h5>
            </div>
        </div>
    )
}

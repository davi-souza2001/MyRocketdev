import React, { ReactElement } from 'react';
import Image from "next/image";
import route from "next/router";

import styles from "../styles/Main.module.css";

interface CommunityOption {
    image: any;
    tec : any;
    area: any;
    routeCommunity: any;
}

export default function CommunityOption(props: CommunityOption) {
    return (
        <div className={styles.contentOption} onClick={() => route.push(`/com/${props.routeCommunity}`)}>
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

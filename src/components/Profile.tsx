import Austroone from "../assets/img/austroone.jpg";
import Image from "next/image";

import styles from "../styles/Profile.module.css";

interface ProfileProps {
    name: String;
    dev: String;
    description: String;
    local: string;
    link: () => any;
}

export default function Profile(props: ProfileProps) {

    
    return (
        <div className={styles.contentbox}>
            <div className={styles.box}>
                <div className={styles.imgProfile}><Image src={Austroone} alt="Imagem"></Image></div>
                <div className={styles.information}>
                        <h3>{props.name}</h3>
                        <div className={styles.infoLocalAndDev}>
                            <h4>{props.dev}</h4>
                            <h4>em</h4>
                            <h4>{props.local}</h4>
                        </div>
                        <p>{props.description}</p>
                </div>
                <div className={styles.match} onClick={props.link}><h3>Match</h3></div>
            </div>
        </div>
    )
}
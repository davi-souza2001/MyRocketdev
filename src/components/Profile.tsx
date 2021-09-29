import styles from "../styles/Profile.module.css";
import Austroone from "../assets/img/austroone.jpg";
import Image from "next/image";

interface ProfileProps {
    name: String;
    dev: String;
    description: String;
}

export default function Profile(props: ProfileProps) {

    
    return (
        <div className={styles.contentbox}>
            <div className={styles.box}>
                <div className={styles.imgProfile}><Image src={Austroone} alt="Imagem"></Image></div>
                <div className={styles.information}>
                        <h3>{props.name}</h3>
                        <h4>{props.dev}</h4>
                        <p>{props.description}</p>
                </div>
                <div className={styles.match}><h3>Match</h3></div>
            </div>
        </div>
    )
}
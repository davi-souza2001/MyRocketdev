import styles from "../styles/Profile.module.css";
import Austroone from "../assets/img/austroone.jpg";
import Image from "next/image";

interface ProfileProps {

}

export default function Profile(Props: ProfileProps) {

    
    return (
        <div className={styles.contentbox}>
            <div className={styles.box}>
                <div className={styles.imgProfile}><Image src={Austroone} alt="Imagem"></Image></div>
                <div className={styles.information}>
                        <h3>Davi Souzaaa</h3>
                        <h4>Front-End</h4>
                        <p>Ola sou programador front-end</p>
                </div>
                <div className={styles.match}><h3>Match</h3></div>
            </div>
        </div>
    )
}
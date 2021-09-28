import useAuth from "../data/hook/useAuth";

import Astro from "../assets/img/austrotwo.jpg";
import route from "next/router";
import Image from "next/image";
import styles from "../styles/Leftbar.module.css";

interface LeftbarProps {

}

export default function Leftbar(props: LeftbarProps) {

    const { user } = useAuth();

    function navigateToHomeRoom(e: any) {
        e.preventDefault();
        route.push("/");
    }

    function navigateToProfileRoom(e: any) {
        route.push("/mainprofile");
    }

    return (
        <>
            <div className={styles.leftbarcontent}>
                <div className={styles.titletab}>
                    <div className={styles.title}><h1>MyRocket</h1></div>
                </div>
                <div className={styles.iconstab}>
                    <div className={styles.home} onClick={navigateToHomeRoom}><h3>Home</h3></div>
                    <div className={styles.search}><h3>Search</h3></div>
                    <div className={styles.profile} onClick={navigateToProfileRoom}><h3>Profile</h3></div>
                </div>
                <div className={styles.contatctab}>
                    <div className={styles.user}>
                        {user ? (
                            <>
                                <Image src={user.imagemUrl} alt="Foto do usuario" width={40} height={40} className={styles.imageB}></Image>
                                <h5>Com login</h5>
                            </>
                        ) :
                            (<h5>Sem login</h5>)}

                    </div>
                </div>
            </div>
        </>
    )
}
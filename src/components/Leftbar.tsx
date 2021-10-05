import useAuth from "../data/hook/useAuth";

import Astro from "../assets/img/austrotwo.jpg";
import route from "next/router";
import Image from "next/image";

import { IconHome } from "./Icons";
import { IconSearch } from "./Icons";
import { IconProfile } from "./Icons";
import styles from "../styles/Leftbar.module.css";

interface LeftbarProps {

}

export default function Leftbar(props: LeftbarProps) {

    const { user, logout, loginGoogle } = useAuth();

    function navigateToHomeRoom(e: any) {
        e.preventDefault();
        route.push("/");
    }

    function navigateToSearchRoom(e: any) {
        e.preventDefault();
        route.push("/search");
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
                    <div className={styles.home} onClick={navigateToHomeRoom}><div className={styles.icon}>{IconHome}</div><h3>Home</h3></div>
                    <div className={styles.search}onClick={navigateToSearchRoom}><div className={styles.icon}>{IconSearch}</div><h3>Search</h3></div>
                    <div className={styles.profile} onClick={navigateToProfileRoom}><div className={styles.icon}>{IconProfile}</div><h3>Profile</h3></div>
                </div>
                <div className={styles.contatctab}>
                    <div className={styles.user} onClick={user ? logout : loginGoogle }>
                        {user ? (
                            <>
                                <Image src={user?.imagemUrl || Astro} alt="Foto do usuario" width={40} height={40} className={styles.imageB}></Image>
                                <h5>{user.name}</h5>
                            </>
                        ) :
                            (<h5>Fazer login</h5>)}
                    </div>
                </div>
            </div>
        </>
    )
}
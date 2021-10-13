import useAuth from "../data/hook/useAuth";

import Astro from "../assets/img/austrotwo.jpg";
import route from "next/router";
import Image from "next/image";

import { IconHome } from "./Icons";
import { IconSearch } from "./Icons";
import { IconProfile } from "./Icons";
import { IconUsersList } from "./Icons";
import styles from "../styles/Topbar.module.css";

interface TopbarProps {

}

export default function Topbar(props: TopbarProps) {

    const { user, logout, loginGoogle } = useAuth();

    return (
        <>
            <div className={styles.leftbarcontent}>
                <div className={styles.titletab}>
                    <div className={styles.title}><h2>MyRocket</h2></div>
                </div>
                <div className={styles.search}>
                    <div className={styles.iconSearch}>{IconSearch}</div>
                    <input type="text" placeholder="Search"/>
                </div>
                <div className={styles.iconstab}>
                    <div className={styles.home} onClick={() => route.push("/")}><div className={styles.iconstabIcon}>{IconHome}</div></div>
                    <div className={styles.home} onClick={() => route.push("/")}><div className={styles.iconstabIcon}>{IconUsersList}</div></div>
                    <div className={styles.profile} onClick={() => route.push("/mainprofile")}><div className={styles.iconstabIcon}>{IconProfile}</div></div>
                </div>
                <div className={styles.usertab}>
                    <div className={styles.user} onClick={user ? logout : loginGoogle }>
                        {user ? (
                            <>
                                <h5>{user.name}</h5>
                                <Image src={user?.imagemUrl || Astro} alt="Foto do usuario" width={40} height={40} className={styles.imageB}></Image>
                            </>
                        ) :
                            (<h5>Fazer login</h5>)}
                    </div>
                </div>
            </div>
        </>
    )
}
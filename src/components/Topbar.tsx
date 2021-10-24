import useAuth from "../data/hook/useAuth";

import Astro from "../assets/img/austrotwo.jpg";
import route from "next/router";
import Image from "next/image";

import astroMyRocket from "../assets/img/astrounauta.svg";

import styles from "../styles/Topbar.module.css";

interface TopbarProps {

}

export default function Topbar(props: TopbarProps) {

    const { user, logout, loginGoogle } = useAuth();

    return (
        <>
            <div className={styles.leftbarcontent}>
                <div className={styles.titletab} onClick={() => route.push("/")}>
                    <div className={styles.title}>
                        <Image src={astroMyRocket} height={150} width={150}/>
                        <h2>MyRocket</h2>
                    </div>
                </div>
                <div className={styles.iconstab}>
                    <div  onClick={() => route.push("/")}>
                        <div><h3>Inicio</h3></div>
                    </div>
                    <div  onClick={() => route.push("/feed")}>
                        <div><h3>Feed</h3></div>
                    </div>
                    <div onClick={() => route.push("/search")}>
                        <div><h3>Pesquisar</h3></div>
                    </div>
                    <div onClick={() => route.push("/")}>
                        <div><h3>Reuniões</h3></div>
                    </div>
                    <div onClick={() => route.push("/mainprofile")}>
                        <div><h3>Perfil</h3></div>
                    </div>
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
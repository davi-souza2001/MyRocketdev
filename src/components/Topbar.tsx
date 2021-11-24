import { useState } from "react";

import useAuth from "../data/hook/useAuth";

import route from "next/router";
import Image from "next/image";

import Astro from "../assets/img/austrotwo.jpg";
import astroMyRocket from "../assets/img/astrounauta.svg";

import styles from "../styles/Topbar.module.css";

interface TopbarProps {

}

export default function Topbar(props: TopbarProps) {

    const { user, logout } = useAuth();    
    const [modal, setModal] = useState(false);

    // Quando o usuário estiver logado e clicar, vai abrir um modal perguntando se ele quer fazer o logout
    function handleModal(){
        if(user){
            setModal(true);
        }
    }

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
                        <div><p>Inicio</p></div>
                    </div>
                    <div  onClick={() => route.push("/feed")}>
                        <div><p>Feed</p></div>
                    </div>
                    <div onClick={() => route.push("/search")}>
                        <div><p>Pesquisar</p></div>
                    </div>
                    <div onClick={() => route.push("/meetings")}>
                        <div><p>Reuniões</p></div>
                    </div>
                    <div onClick={() => route.push("/mainprofile")}>
                        <div><p>Perfil</p></div>
                    </div>
                </div>
                <div className={styles.usertab}>
                    <div className={styles.user} onClick={user ? handleModal : () => route.push("/login") }>
                        {user ? (
                            <>
                                {modal ? <h5 onClick={logout}>Fazer logout ?</h5> : <h5>{user.name}</h5>}
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
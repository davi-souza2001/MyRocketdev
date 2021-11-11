import { useEffect, useState } from "react";

import Topbar from "../components/Topbar";
import ListPublis from "../components/ListPublis";
import Image from "next/image";

import useAuth from "../data/hook/useAuth";
import firebase from "../firebase/config";

import styles from "../styles/feedmain.module.css";

import astroAlone from "../assets/img/astronauta_sozinho.svg";
import useProfile from "../data/hook/useProfile";

interface MainPage {

}

export default function MainPage(props: MainPage) {

    const { user } = useAuth();
    const { profileList } = useProfile();
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [showfirst, setShowFirst] = useState(true);
    const [showsecond, setShowSecond] = useState(false);
    const [showthird, setShowThird] = useState(false);

    useEffect(() => {
        const getUserCommuns = profileList.map((prof) => {
            if (prof?.email == user?.email) {
                setFirst(prof.firstComum);
                setSecond(prof.secondComum);
                setThird(prof.thirdComum);
            }
        })
    }, [user, profileList]);

    function showFeedFirst(){
        setShowFirst(true);
        setShowSecond(false);
        setShowThird(false);
        document.getElementById("box1").style.backgroundColor = "#1613B2";
        document.getElementById("box2").style.backgroundColor = "#3936EB";
        document.getElementById("box3").style.backgroundColor = "#3936EB";
    }

    function showFeedSecond(){
        setShowFirst(false);
        setShowSecond(true);
        setShowThird(false);
        document.getElementById("box1").style.backgroundColor = "#3936EB";
        document.getElementById("box2").style.backgroundColor = "#1613B2";
        document.getElementById("box3").style.backgroundColor = "#3936EB";
    }

    function showFeedThird(){
        setShowFirst(false);
        setShowSecond(false);
        setShowThird(true);
        document.getElementById("box1").style.backgroundColor = "#3936EB";
        document.getElementById("box2").style.backgroundColor = "#3936EB";
        document.getElementById("box3").style.backgroundColor = "#1613B2";
    }

    return (
        <>
            <Topbar />
            <div className={styles.contentGeral}>
                {first && user ? (
                    <>
                        <div className={styles.contentTitle}>
                            <span>Posts recentes da Comunidade</span>
                        </div>
                        <div className={styles.contentFeedName}>
                            <div className={styles.boxNameFeed} id="box1" onClick={showFeedFirst}>
                                {first}
                            </div>
                            <div className={styles.boxNameFeed} id="box2" onClick={showFeedSecond}>
                                {second}
                            </div>
                            <div className={styles.boxNameFeed} id="box3" onClick={showFeedThird}>
                                {third}
                            </div>
                        </div>
                        <div className={styles.contentFeed}>
                            {showfirst ? (
                                <div className={styles.feed}>
                                    <ListPublis linkComuList={first} />
                                </div>
                            ): false}
                            {showsecond ? (
                                <div className={styles.feed}>
                                    <ListPublis linkComuList={second} />
                                </div>
                            ): false}
                            {showthird ? (
                                <div className={styles.feed}>
                                    <ListPublis linkComuList={third} />
                                </div>
                            ): false}
                        </div>
                    </>
                ) : 
                (
                <>
                <div className={styles.notLogged}>
                    <p>Parece que você ainda não fez <strong>login</strong></p>
                    <p>ou não entrou em alguma <strong>comunidade</strong></p>
                    <Image src={astroAlone} height={300} width={300} alt="astro" />
                </div>
                </>
                )}
            </div>
        </>
    )
}
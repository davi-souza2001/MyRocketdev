import { useEffect, useState } from "react";

import Topbar from "../components/Topbar";
import ListPublis from "../components/ListPublis";

import useAuth from "../data/hook/useAuth";
import firebase from "../firebase/config";

import styles from "../styles/feedmain.module.css";

interface MainPage {

}

export default function MainPage(props: MainPage) {

    const { user } = useAuth();
    const [profilesList, setProfilesList] = useState([]);
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [showfirst, setShowFirst] = useState(true);
    const [showsecond, setShowSecond] = useState(false);
    const [showthird, setShowThird] = useState(false);

    useEffect(() => {
        const todoRef = firebase.database().ref("Profiles");
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setProfilesList(todoList);
        })

    }, []);

    useEffect(() => {
        const getUserCommuns = profilesList.map((prof) => {
            if (prof?.email == user?.email) {
                setFirst(prof.firstComum);
                setSecond(prof.secondComum);
                setThird(prof.thirdComum);
            }
        })
    }, [user, profilesList]);

    function showFeedFirst(){
        setShowFirst(true);
        setShowSecond(false);
        setShowThird(false);
       
    }

    function showFeedSecond(){
        setShowFirst(false);
        setShowSecond(true);
        setShowThird(false);
    }

    function showFeedThird(){
        setShowFirst(false);
        setShowSecond(false);
        setShowThird(true);
    }

    return (
        <>
            <Topbar />
            <div className={styles.contentGeral}>
                {first && user ? (
                    <>
                        <div className={styles.contentTitle}>
                            <h2>Posts recentes da Comunidade</h2>
                        </div>
                        <div className={styles.contentFeedName}>
                            <div className={styles.boxNameFeed} onClick={showFeedFirst}>
                                {first}
                            </div>
                            <div className={styles.boxNameFeed} onClick={showFeedSecond}>
                                {second}
                            </div>
                            <div className={styles.boxNameFeed} onClick={showFeedThird}>
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
                    <h1>Parece que você ainda não fez login</h1>
                    <h1>ou não entrou ainda em alguma comunidade :(</h1>
                </>
                )}
            </div>
        </>
    )
}

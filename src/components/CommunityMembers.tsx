import Image from "next/image";
import { useEffect, useState } from "react";

import firebase from "../firebase/config";
import useAuth from "../data/hook/useAuth";
import useProfile from "../data/hook/useProfile";

import astroMyRocket from "../assets/img/astrounauta.svg";
import styles from "../styles/CommunityMembers.module.css";

interface CommunityMembers {
    linkComuList: any;
    children?: any;
    showAdmin: boolean;
}

export default function CommunityMembers(props: CommunityMembers){
    const { profileList } = useProfile();
    const { user } = useAuth();
    const [publisList, setPublisListList] = useState([]);
    const [mostLike, setMostLike] = useState(0);
    const [listLikeCount, setListLikeCount] = useState([]);

    const [showadmin, setShowAdmins] = useState(props.showAdmin);

    const adminPhoto = profileList[0]?.image;

    useEffect(() => {
        const todoRef = firebase.database().ref(props.linkComuList);
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setPublisListList(todoList);
        })
    }, [user]);

    useEffect(() => {
        const list = publisList?.map((publis) => {
            if(publis.likes){
                console.log(Object.keys(publis.likes).length)
            }
        })

    }, [publisList]);

    
    return (
        <div className={styles.contentGeral}>
            {showadmin ? (
                <>
                    <div className={styles.contentAdmin}>
                        <h2>Comandante</h2>
                        <div className={styles.contentAdminSection}>
                            <Image alt="admin foto" src={adminPhoto ? adminPhoto : astroMyRocket} width={30} height={30}/>
                            <p>{profileList[0]?.name}</p>
                        </div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.contentAdmin}>
                        <h2>Tripulantes</h2>
                        <div className={styles.crew}>
                          {props.children}
                        </div>
                    </div>
                </>
            ) : <h4>Em breve</h4>}
        </div>
    )
}

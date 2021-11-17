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
    const [secondMostLike, setSecondmostLike] = useState(0);
    const [thirdMostLike, setThirdMostLike] = useState(0);

    const [postMostLike, setPostMostLike] = useState("");
    const [postSecondMostLike, setPostSecondMostLike] = useState("");
    const [postThirdMostLike, setPostThirdMostLike] = useState("");

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
                if(Object.keys(publis.likes).length > mostLike){
                    setMostLike(Object.keys(publis.likes).length)
                    setPostMostLike(publis.post)
                }
                if(Object.keys(publis.likes).length < mostLike ){
                    if(Object.keys(publis.likes).length > secondMostLike){
                        setSecondmostLike(Object.keys(publis.likes).length)
                        setPostSecondMostLike(publis.post)
                    }
                }

                if(Object.keys(publis.likes).length < secondMostLike){
                    if(Object.keys(publis.likes).length > thirdMostLike){
                        setThirdMostLike(Object.keys(publis.likes).length)
                        setPostThirdMostLike(publis.post)
                    }
                }
            }
        })
    }, [publisList, postMostLike, postSecondMostLike, postThirdMostLike]);

    console.log(postMostLike)
    console.log(postSecondMostLike)
    console.log(postThirdMostLike)
    
    
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
            ) : (
                <>
                <h4>{postMostLike}</h4>
                <h4>{postSecondMostLike}</h4>
                <h4>{postThirdMostLike}</h4>
                </>
            )}
        </div>
    )
}

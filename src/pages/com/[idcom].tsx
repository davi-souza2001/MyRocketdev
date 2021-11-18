import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import Topbar from "../../components/Topbar";
import ListPublis from "../../components/ListPublis";
import AddPost from "../../components/AddPost";
import astroMyRocket from "../../assets/img/astrounauta.svg";

import useAuth from "../../data/hook/useAuth";
import firebase from "../../firebase/config";
import useProfile from "../../data/hook/useProfile";

import styles from "../../styles/Com.module.css"
import CommunityMembers from "../../components/CommunityMembers";

interface idCommunitie {

}

export default function Com(props: idCommunitie) {
    const router = useRouter();
    const idcom = router.query.idcom;
    const [publisList, setPublisListList] = useState([]);

    const [mostLike, setMostLike] = useState(0);
    const [secondMostLike, setSecondmostLike] = useState(0);
    const [thirdMostLike, setThirdMostLike] = useState(0);

    const [postMostLike, setPostMostLike] = useState("");
    const [postSecondMostLike, setPostSecondMostLike] = useState("");
    const [postThirdMostLike, setPostThirdMostLike] = useState("");

    const { user } = useAuth();
    const { profileList } = useProfile();

    /* const todoRef = firebase.database().ref(props.linkComu); */

    useEffect(() => {
        const todoRef = firebase.database().ref(idcom?.toString());
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

    return (
        <div className={styles.content}>
            <Topbar />
            <Head>
                <title>Planeta {idcom}</title>
            </Head>

            <div className={styles.communityContent}>
                <div className={styles.contentBarTitle}>
                    <div>
                        <h2>Planeta {idcom}</h2>
                    </div>
                    <div className={styles.contentPosts}>
                        <h2>{publisList?.length} postagens</h2>
                    </div>
                </div>
                <div className={styles.divRow}>
                    <div className={styles.row}></div><Image src={astroMyRocket} height={150} width={150} alt="Astro" /><div className={styles.row}></div>
                </div>
                <div className={styles.contentMembersAndAddPost}>
                    <CommunityMembers linkComuList={idcom} showAdmin>
                        <div className={styles.contentMembers}>
                            {profileList?.map((prof) => {
                                if (prof.firstComum == idcom || prof.secondComum == idcom || prof.thirdComum == idcom) {
                                    return(
                                        <div className={styles.contentMembersIntoComum} key={prof.name}>
                                            <Image alt="user image" src={prof.image} width={30} height={30}/>
                                            <p>{prof.name}</p> 
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </CommunityMembers>
                    <AddPost linkComu={idcom} name={user ? user?.name : "Faça login para fazer parte da comunidade"} />
                    <div className={styles.contentMostsLikes}>
                        <div className={styles.contentTitleMostLikes}>
                            <h2>Assuntos mais relevantes</h2>
                        </div>
                        <div className={styles.contentBar}></div>
                        <div className={styles.contentPostsMostsLikes}>
                            <div className={styles.postsMostsLikes}>
                                <Image src={user?.imagemUrl} width={40} height={40}/>
                                <div className={styles.contentInfoPost}>
                                    <h4>{postMostLike}</h4>
                                </div>
                            </div>
                            <h3>{postSecondMostLike}</h3>
                            <h3>{postThirdMostLike}</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.contentBodyPosts}>
                    <ListPublis linkComuList={idcom} />
                </div>
            </div>
 
        </div>
    )
}

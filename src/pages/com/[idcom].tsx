import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

    const { user } = useAuth();
    const { profileList } = useProfile();




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
    }, []);

    return (
        <div className={styles.content}>
            <Topbar />
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
                        {profileList.map((prof) => {
                            if (prof.firstComum == idcom || prof.secondComum == idcom || prof.thirdComum == idcom) {
                                return(
                                    <div className={styles.contentMembersIntoComum}>
                                        <Image src={prof.image} width={30} height={30}/>
                                        <p key={prof.name}>{prof.name}</p> 
                                    </div>
                                )
                            }
                        })}
                    </div>
                </CommunityMembers>
                <AddPost linkComu={idcom} name={user ? user?.name : "Faça login para fazer parte da comunidade"} />
                <CommunityMembers linkComuList={idcom} showAdmin={false} />
            </div>
            <div className={styles.contentBodyPosts}>
                <ListPublis linkComuList={idcom} />
            </div>
        </div>
    )
}

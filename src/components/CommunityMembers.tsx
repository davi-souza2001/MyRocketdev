import Image from "next/image";
import { useEffect, useState } from "react";

import firebase from "../firebase/config";

import astroMyRocket from "../assets/img/astrounauta.svg";
import styles from "../styles/CommunityMembers.module.css";

interface CommunityMembers {
    linkComuList: any;
    children?: any;
    showAdmin: boolean;
}

export default function CommunityMembers(props: CommunityMembers){
    const [publisList, setPublisListList] = useState([]);
    const [adminsList, setadminsListListList] = useState([]);
    const [showadmin, setShowAdmins] = useState(props.showAdmin);

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
      }, []);

    useEffect(() => {
        const todoAdmin = firebase.database().ref("Profiles");
        todoAdmin.on('value', (snapshot) => {
          const todos = snapshot.val();
          const todoList = [];
          for (let id in todos) {
            todoList.push({ id, ...todos[id] });
          }
          setadminsListListList(todoList);
        })
      }, []);

      const adminPhoto = adminsList[0]?.image;

    return (
        <div className={styles.contentGeral}>
            {showadmin ? (
                <>
                    <div className={styles.contentAdmin}>
                        <h2>Admins</h2>
                        <div className={styles.contentAdminSection}>
                            <Image src={adminPhoto ? adminPhoto : astroMyRocket} width={30} height={30}/>
                            <p>{adminsList[0]?.name}</p>
                        </div>
                        <div className={styles.bar}></div>
                        <h2>Moderadores</h2>
                        <div className={styles.contentAdminSection}>
                            <Image src={adminPhoto ? adminPhoto : astroMyRocket} width={30} height={30}/>
                            <p>{adminsList[0]?.name}</p>
                        </div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.contentAdmin}>
                        <h2>Membros</h2>
                        {props.children}
                    </div>
                </>
            ) : <h4>Em breve</h4>}
        </div>
    )
}

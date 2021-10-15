import { useRouter } from "next/router";
import Image from "next/image";

import Topbar from "../../components/Topbar";
import ListPublis from "../../components/ListPublis";
import AddPost from "../../components/AddPost";
import astroMyRocket from "../../assets/img/astrounauta.svg";

import useAuth from "../../data/hook/useAuth";

import styles from "../../styles/Com.module.css"

interface idCommunitie {
    
}

export default function Com(props: idCommunitie){
    const router = useRouter();
    const idcom = router.query.idcom;

    const { user } = useAuth();

    return (
        <div className={styles.content}>
            <Topbar />
            <div className={styles.contentBarTitle}>
                <div>
                    <h2>Comunidade {idcom}</h2>
                </div>
                <div className={styles.contentPosts}>
                    <h2>4 postagens</h2>
                </div>
            </div>
            <div className={styles.divRow}>
                <div className={styles.row}></div><Image src={astroMyRocket} height={150} width={150} alt="Astro"/><div className={styles.row}></div>
            </div>
            <div >
                <AddPost linkComu={idcom} name={user ? user?.name : "Faça login para fazer parte da comunidade"}/>
                <ListPublis linkComuList={idcom}/>
            </div>
        </div>
    )
}

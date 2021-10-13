import { useRouter } from "next/router";

import Topbar from "../../components/Topbar";
import PostUser from "../../components/PostUser";
import Image from "next/image";

import astroMyRocket from "../../assets/img/astrounauta.svg";

import styles from "../../styles/Com.module.css"

interface idCommunitie {
    
}

export default function com(props: idCommunitie){
    const router = useRouter();
    const idcom = router.query.idcom;
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
                <div className={styles.row}></div><Image src={astroMyRocket} height={150} width={150}/><div className={styles.row}></div>
            </div>
            <PostUser/>
        </div>
    )
}

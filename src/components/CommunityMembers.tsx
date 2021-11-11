import Image from "next/image";
import { useEffect, useState } from "react";

import firebase from "../firebase/config";
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

    const [showadmin, setShowAdmins] = useState(props.showAdmin);

    const adminPhoto = profileList[0]?.image;

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

import  route  from "next/router";
import { useState } from "react";
import Leftbar from "../components/Leftbar";
import Profile from "../components/Profile";
import useProfile from "../data/hook/useProfile";

import astro from "../assets/img/austroone.jpg"
import styles from "../styles/Search.module.css";

interface searchProps {
    
}

export default function Search(Props: searchProps){
    const { profileList } = useProfile();
    const [profSearch, setProfSearch] = useState("");
  
    function renderProfiles() {
        return profileList?.map((profile, index) => {
            if(profSearch == profile.dev || profSearch == profile.userName){
            return (
                <div key={index}>
                    <Profile image={profile.image  || astro} name={profile.name} dev={profile.dev} local={profile.local} description={profile.description} link={() => route.push(`/${profile.userName}`)}/>
                </div>
            )}
        });
    }

    return (
        <div className={styles.searchContent}>
            <Leftbar/>
            <div className={styles.inputContent}>
                <div className={styles.boxInBox}>
                    <div className={styles.boxInput}>
                        <input type="text" className={styles.input} value={profSearch} onChange={(e) => setProfSearch(e.target.value)} placeholder="Ache aqui o astronauta que você procura"/>
                    </div>
                </div>
                <div className={styles.profilesContent}>
                    {renderProfiles()}
                </div>
            </div>
        </div>
    )
}

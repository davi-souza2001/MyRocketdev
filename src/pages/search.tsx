import  route  from "next/router";
import React, { useState } from "react";
import ContentProfile from "../components/ContentProfile";
import Leftbar from "../components/Leftbar";
import Profile from "../components/Profile";
import useProfile from "../data/hook/useProfile";

import styles from "../styles/Search.module.css";

interface searchProps {
    
}

export default function search(Props: searchProps){
    const { profileList } = useProfile();
    const [profSearch, setProfSearch] = useState("");
  
    function renderProfiles() {
        return profileList?.map((profile, index) => {
            if(profSearch == profile.dev || profSearch == profile.userName){
            return (
                <div key={index}>
                    <Profile name={profile.name} dev={profile.dev} local={profile.local} description={profile.description} link={() => route.push(`/${profile.userName}`)}/>
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

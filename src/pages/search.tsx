import { useEffect, useState } from "react";
import  route  from "next/router";
import Head from "next/head";

import Topbar from "../components/Topbar";
import Profile from "../components/Profile";
import useProfile from "../data/hook/useProfile";

import astro from "../assets/img/austroone.jpg";
import styles from "../styles/Search.module.css";

interface searchProps {
    
}

export default function Search(Props: searchProps){
    const { profileList } = useProfile();
    const [profSearch, setProfSearch] = useState("");

    useEffect(() => {
        if(profSearch == "full-stack"){
            setProfSearch("Full-Stack")
        }else if(profSearch == "front-end"){
            setProfSearch("Front-End")
        }else if(profSearch == "back-end"){
            setProfSearch("Back-End")
        }else if(profSearch == "mobile"){
            setProfSearch("Mobile")
        }else if(profSearch == "dados"){
            setProfSearch("Dados")
        }else if(profSearch == "ios"){
            setProfSearch("IOS")
        }else if(profSearch == "android"){
            setProfSearch("Android")
        }
    }, [profSearch])
  
    function renderProfiles() {
        return profileList?.map((profile, index) => {
            if( profSearch == profile.userName || profSearch == profile.name || profSearch == profile.dev ){
                return (
                <div key={index}>
                    <Profile image={profile.image  || astro} name={profile.name} dev={profile.dev} local={profile.local} description={profile.description} link={() => route.push(`/${profile.userName}`)}/>
                </div>
            )}
        });
    }

    return (
        <div className={styles.searchContent}>
            <Topbar/>
            <Head>
                <title>Pesquisa</title>
            </Head>
            <div className={styles.inputContent}>
                <div className={styles.boxInput}>
                    <input type="text" className={styles.input} value={profSearch} onChange={(e) => setProfSearch(e.target.value)} placeholder="Ache aqui o astronauta que você procura"/>
                </div>

                <div className={styles.profilesContent}>
                    {renderProfiles()}
                </div>
            </div>
        </div>
    )
}

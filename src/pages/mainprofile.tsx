import React, { useEffect, useState } from "react";
import route from "next/router";
import Image from "next/image";
import useProfile from "../data/hook/useProfile";
import useAuth from "../data/hook/useAuth";
import client from "../services/client";

import Topbar from "../components/Topbar";
import ContentMainProfile from "../components/ContentMainProfille";
import ModalEditProfile from "../components/ModalEditProfile";

import Austroone from "../assets/img/austroone.jpg";
import AstroLike from "../assets/img/austrolike.jpg";

import styles from "../styles/ContentMainProfile.module.css";


export default function MainProfile() {
    const { user } = useAuth();
    const { profileList } = useProfile();
    const [repos, setRepos] = useState([]);
    const [seflgithub, setSeflgithub] = useState("");

    const [modal, setModal] = useState(true);

    //Start logic get user for api gitHub

    useEffect(() => {
        const getUserGithub = profileList.map((prof) => {
            if(prof?.email == user?.email){
                setSeflgithub(prof.github);
            }
        })
    }, [user, profileList, repos, seflgithub]);

    useEffect(() => {
        client.get(`/${seflgithub}/repos`).then(({data}) => {
            setRepos(data);
        }).catch((err) => console.log("Erroou"))
    }, [seflgithub]);
    
    function renderRepos(){
        return repos?.map((repo, index) => {
            return(
                <div className={styles.descriptionProfile} key={index}>
                    <h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h3>
                </div>
            )
        })
    }

    //End logic get user for api gitHub

    //Start login to edit profile



    //End login to edit profile



    //Start variable for render profile right in main profile (left bar)

    const renderProfiles = profileList.map(
        function (prof, index){
            if(prof.email == user?.email)
            return (
                <div className={styles.MainProfile} key={index}>
                    {modal ? <ModalEditProfile modalActivity={() => setModal(false)}/> : false}
                    <div className={styles.imgBackground}>
                        <Image src={AstroLike} alt="Astronauta dando like" height={200} width={200} />
                    </div>
                    <div className={styles.imgProfileUser}>
                        <Image src={prof.image || Austroone} height={999} width={999} alt="Foto de Perfil"></Image>
                        <div className={styles.contentUser}>
                            <div className={styles.config}>
                            <h3>{prof.name}</h3>
                            <p onClick={() => setModal(true)}>Ajustar</p>
                            </div>
                            <p>@{prof.userName}</p>
                            <p>{prof.dev} em {prof.local}</p>
                                <div className={styles.description}>
                                    <h4>{prof.description}</h4>
                                </div>
                        </div>
                    </div>
                    <div className={styles.bar}></div>
                    <div className={styles.optionsBar}>
                        <div className={styles.contentOption}>
                            <h4>Projetos</h4>
                        </div>
                    </div>
                    <div className={styles.finalGeral}>
                        <div className={styles.communitiesUser}>
                            <h3>Comunidades</h3>
                            <div className={styles.communitiesPerson}>
                                <p onClick={() => route.push(`/com/${prof.firstComum}`)}>{prof.firstComum}</p>
                                <p onClick={() => route.push(`/com/${prof.secondComum}`)}>{prof.secondComum}</p>
                                <p onClick={() => route.push(`/com/${prof.thirdComum}`)}>{prof.thirdComum}</p>
                            </div>
                        </div>
                        <div className={styles.spacingbar}>
                            {renderRepos()}
                        </div>
                        <div className={styles.socialMedias}>
                            {prof.linkedin ? <h3 onClick={() => route.push(`https://www.linkedin.com/in/${prof.linkedin}/`)}>Linkedin: {prof.linkedin}</h3> : false}
                            {prof.github ? <h3 onClick={() => route.push(`https://github.com/${prof.github}`)}>Github: {prof.github}</h3> : false}
                            {prof.instagram ? <h3 onClick={() => route.push(`https://www.instagram.com/${prof.instagram}/`)}>Instagram: {prof.instagram}</h3> : false}
                            {prof.youtube ? <h3 onClick={() => route.push(`https://www.youtube.com/user/${prof.youtube}`)}>Youtube: {prof.youtube}</h3> : false}
                        </div>
                    </div>
                </div>
            )
        }
    )

    //End variable for render profile right in main profile (left bar)


    return (
        <div className={styles.contentMainProfile}>
            <Topbar/>
            {user ? 
                <ContentMainProfile>
                    {renderProfiles}
                </ContentMainProfile>    
            :
                <div className={styles.noLogin}>
                    <h1>Faça seu login para mostrar seu perfil para outros astronautas !</h1>
                </div>}
        </div>
    )
}
import React, { useEffect, useState } from "react";
import route from "next/router";
import Image from "next/image";
import Head from "next/head";

import useProfile from "../data/hook/useProfile";
import useAuth from "../data/hook/useAuth";
import client from "../services/client";

import Topbar from "../components/Topbar";
import ContentMainProfile from "../components/ContentMainProfille";
import ModalEditProfile from "../components/ModalEditProfile";

import Austroone from "../assets/img/austroone.jpg";
import AstroLike from "../assets/img/austrolike.jpg";
import linkedin from "../assets/img/socialimgs/linkedin.svg";
import github from "../assets/img/socialimgs/github.svg";
import instagram from "../assets/img/socialimgs/instagram.svg";
import youtube from "../assets/img/socialimgs/youtube.svg";

import edit from "../assets/img/editar.png";

import styles from "../styles/ContentMainProfile.module.css";


export default function MainProfile() {
    const { user } = useAuth();
    const { profileList } = useProfile();
    const [repos, setRepos] = useState([]);
    const [seflgithub, setSeflgithub] = useState("");

    const [modal, setModal] = useState(false);

    const [checkEmailProfile, setCheckEmailProfile] = useState(true);

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
                    <p><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></p>
                </div>
            )
        })
    }

    //End logic get user for api gitHub

    // Start login if user logged but no have profille
    
    useEffect(() => {
        profileList?.map((prof) => {
            if(user){
                if(prof.email == user?.email){
                    setCheckEmailProfile(false)
                }
            }
        })
    }, [user, profileList])

    // End login if user logged but no have profille

    //Start variable for render profile right in main profile (left bar)

    const renderProfiles = profileList.map(
        function (prof, index){
            if(prof.email == user?.email)
            return (
                <div className={styles.MainProfile} key={index}>

                    {modal ? <ModalEditProfile modalActivity={() => setModal(false)} closeModal={() => setModal(false)}
                    /> : false}
                    <div className={styles.perfilHeader}>
                        <div className={styles.imgBackground}>
                            <Image src={AstroLike} alt="Astronauta dando like" height={200} width={200} />
                        </div>
                        <div className={styles.imgProfileUser}>
                            <div className={styles.userImg}>
                                <Image className={styles.image} src={prof.image || Austroone} height={150} width={150} alt="Foto de Perfil"></Image>
                            </div>
                            <div className={styles.contentUser}>
                                <div className={styles.config}>
                                    <h3>{prof.name}</h3>
                                    <p onClick={() => setModal(true)}>Editar <Image className={styles.editImg} src={edit} height={15} width={20}/></p>                                    
                                </div>
                                <p>@{prof.userName}</p>
                                <p>{prof.dev} em {prof.local}</p>
                                    <div className={styles.description}>
                                        <h4>{prof.description}</h4>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bar}></div>
                    <div className={styles.finalGeral}>
                        <div className={styles.communitiesArea}>
                            <h3>Comunidades</h3>
                            <div className={styles.communitiesUser}>
                                <div className={styles.communitiesPerson}>
                                    <p onClick={() => route.push(`/com/${prof.firstComum}`)}>{prof.firstComum}</p>
                                    <p onClick={() => route.push(`/com/${prof.secondComum}`)}>{prof.secondComum}</p>
                                    <p onClick={() => route.push(`/com/${prof.thirdComum}`)}>{prof.thirdComum}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsArea}>
                            <h3>Projetos</h3>
                            <div className={styles.spacingbar}>
                                {renderRepos()}
                            </div>
                        </div>
                        <div className={styles.socialMediasArea}>
                            <h3>Redes Sociais</h3>
                            <div className={styles.socialMedias}>
                                <div className={styles.leftContent}>
                                    {prof.linkedin ? <p onClick={() => route.push(`https://www.linkedin.com/in/${prof.linkedin}/`)} className={styles.socialMedia}><Image src={linkedin} alt="linkedin" height={25} width={25}/> {prof.linkedin}</p> : false}
                                    {prof.github ? <p onClick={() => route.push(`https://github.com/${prof.github}`)} className={styles.socialMedia}><Image src={github} alt="github" height={25} width={25} /> {prof.github}</p> : false}
                                    {prof.instagram ? <p onClick={() => route.push(`https://www.instagram.com/${prof.instagram}/`)} className={styles.socialMedia}><Image src={instagram} alt="instagram" height={25} width={25} /> {prof.instagram}</p> : false}
                                    {prof.youtube ? <p onClick={() => route.push(`https://www.youtube.com/user/${prof.youtube}`)} className={styles.socialMedia}><Image src={youtube} alt="youtube" height={25} width={25} /> {prof.youtube}</p> : false}
                                </div>
                            </div>
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
            <Head>
                <title>Perfil pessoal</title>
            </Head>
            {user ? 
                <ContentMainProfile>
                    {renderProfiles}
                </ContentMainProfile>    
            :
                <div className={styles.noLogin}>
                    <p>Faça seu <strong>login</strong> para mostrar seu perfil para outros astronautas!</p>
                </div>}

            {checkEmailProfile ? (
                <div className={styles.noLogin}>
                    <p>Faça login novamente para criar um perfil</p>
                </div>
            ): false}
        </div>
    )
}
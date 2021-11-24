import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import route from "next/router";
import Image from "next/image";

import client from "../services/client";

import Topbar from "../components/Topbar";
import Austroone from "../assets/img/austroone.jpg";
import useProfile from "../data/hook/useProfile";

import AstroLike from "../assets/img/austrolike.jpg";
import linkedin from "../assets/img/socialimgs/linkedin.svg";
import github from "../assets/img/socialimgs/github.svg";
import instagram from "../assets/img/socialimgs/instagram.svg";
import youtube from "../assets/img/socialimgs/youtube.svg";

import styles from "../styles/ContentMainProfile.module.css";

export default function MainProfile() {
    const router = useRouter();
    const profileSearch = router.query.profile;
    const { profileList } = useProfile();
    const [repos, setRepos] = useState([]);
    const [seflgithub, setSeflgithub] = useState("");

    //Start logic get user for api gitHub
    // Como esse component qualquer usuário pode acessar sem login então ele verifica na lista de perfis
    // se o nick salvo no perfil for igual ao nick procurado então ele seta o github do perfil para o
    // component inteiro

    useEffect(() => {
        const getUserGithub = profileList.map((prof) => {
            if (prof.userName == profileSearch) {
                setSeflgithub(prof.github);
            }
        })
    }, [profileList, repos, seflgithub]);

    // Com o github do perfil procurado já salvo, ele consome a api do github, pegando apenas a parte da api
    // que retorna os repositorios do usuário e seta para todo o componente

    useEffect(() => {
        client.get(`/${seflgithub}/repos`).then(({ data }) => {
            setRepos(data);
        }).catch((err) => console.log("Erroou"))
    }, [seflgithub]);

    // Função que vai retornar o repositorio da pessoa procurada na aba projetos
    function renderRepos() {
        return repos?.map((repo, index) => {
            return (
                <div className={styles.descriptionProfile} key={index}>
                    <p><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></p>
                </div>
            )
        })
    }

    //End logic get user for api gitHub

    //Start state to open pages

    const [description, setDescription] = useState(true);
    const [projects, setProjects] = useState(false);
    const [social, setSocial] = useState(false);

    //End state to open pages

    //Start variable for render profile right in search profile (left bar)
    // Ele percorre a lista de perfil, e quando o nick procurado for igual ao nick de um perfil achado
    // retorna os dados desse mesmo perfil

    const renderProfiles = profileList.map(
        function (prof, index) {
            if (prof.userName == profileSearch)
            return (
                <div className={styles.MainProfile} key={index}>
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
                                    <p onClick={() => route.push(`/com/${prof.firstComum}`)}>{prof.firstComum == "--Front-End--" || prof.firstComum == "--Back-End--" || prof.firstComum == "--Mobile--" ? false : prof.firstComum}</p>
                                    <p onClick={() => route.push(`/com/${prof.secondComum}`)}>{prof.secondComum == "--Front-End--" || prof.secondComum == "--Back-End--" || prof.secondComum == "--Mobile--" ? false : prof.secondComum}</p> 
                                    <p onClick={() => route.push(`/com/${prof.thirdComum}`)}>{prof.thirdComum == "--Front-End--" || prof.thirdComum == "--Back-End--" || prof.thirdComum == "--Mobile--" ? false : prof.thirdComum}</p> 
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


    return (
        <div className={styles.contentMainProfile}>
            <Topbar />
            <Head>
                <title>Tripulante {profileSearch}</title>
            </Head>
            {renderProfiles}
        </div>
    )
}
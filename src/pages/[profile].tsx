import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import client from "../services/client";

import Leftbar from "../components/Leftbar";
import Austroone from "../assets/img/austroone.jpg";
import useProfile from "../data/hook/useProfile";

import AstroLike from "../assets/img/austrolike.jpg";

import styles from "../styles/ContentMainProfile.module.css";

export default function MainProfile() {
    const router = useRouter();
    const profileSearch = router.query.profile;
    const { profileList } = useProfile();
    const [repos, setRepos] = useState([]);
    const [seflgithub, setSeflgithub] = useState("");

    //Start logic get user for api gitHub

    useEffect(() => {
        const getUserGithub = profileList.map((prof) => {
            if (prof.userName == profileSearch) {
                setSeflgithub(prof.github);
            }
        })
    }, [profileList, repos, seflgithub]);

    useEffect(() => {
        client.get(`/${seflgithub}/repos`).then(({ data }) => {
            setRepos(data);
        }).catch((err) => console.log("Erroou"))
    }, [seflgithub]);

    function renderRepos() {
        return repos?.map((repo, index) => {
            return (
                <div className={styles.descriptionProfile} key={index}>
                    <h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h3>
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

    const renderProfiles = profileList.map(
        function (prof, index) {
            if (prof.userName == profileSearch)
                return (
                    <div className={styles.MainProfile} key={index}>
                        <div className={styles.imgBackground}>
                            <Image src={AstroLike} alt="Astronauta dando like" height={200} width={200} />
                        </div>
                        <div className={styles.imgProfileUser}>
                            <Image src={Austroone} alt="Foto de Perfil"></Image>
                            <h3>{prof.name}</h3>
                            <p>@{prof.userName}</p>
                            <p>{prof.local}</p>
                        </div>
                        <div className={styles.bar}></div>
                        <div className={styles.optionsBar}>
                            <div className={styles.contentOption} onClick={activeModalDescription}>
                                <h4>Descrição</h4>
                            </div>
                            <div className={styles.contentOption} onClick={activeModalProjects}>
                                <h4>Projetos</h4>
                            </div>
                            <div className={styles.contentOption} onClick={activeModalSocial}>
                                <h4>Sociais</h4>
                            </div>
                        </div>

                        {description ? (
                            <div className={styles.descriptionProfile}>
                                <h3>{prof.description}</h3>
                            </div>
                        ) : <div></div>}

                        {projects ? (
                            <>
                                <div className={styles.spacingbar}>
                                    {renderRepos()}
                                </div>
                            </>
                        ) : <div></div>}

                        {social ? (
                            <>
                                {prof.linkedin ?
                                    <div className={styles.descriptionProfile}>
                                        <h3><a href={`https://www.linkedin.com/in/${prof.linkedin}/`} target="_blank" rel="noreferrer">Likedin: {prof.linkedin}</a></h3>
                                    </div>
                                    :
                                    false}
                                {prof.github ?
                                    <div className={styles.descriptionProfile}>
                                        <h3><a href={`https://github.com/${prof.github}`} target="_blank" rel="noreferrer">GitHub: {prof.github}</a></h3>
                                    </div>
                                    :
                                    false}
                                {prof.instagram ?
                                    <div className={styles.descriptionProfile}>
                                        <h3><a href={`https://www.instagram.com/${prof.instagram}/`} target="_blank" rel="noreferrer">Instagram: {prof.instagram}</a></h3>
                                    </div>
                                    :
                                    false}
                                {prof.youtube ?
                                    <div className={styles.descriptionProfile}>
                                        <h3><a href={`https://www.youtube.com/user/${prof.youtube}`} target="_blank" rel="noreferrer">Youtube: {prof.youtube}</a></h3>
                                    </div>
                                    :
                                    false}
                            </>
                        ) : false}
                    </div>
                )
        }
    )

    //End variable for render profile right in search profile (left bar)

    //Start functions to open modal pages

    function activeModalDescription() {
        if (!description) {
            setDescription(true);
            setProjects(false);
            setSocial(false);
        }
    }

    function activeModalProjects() {
        if (!projects) {
            setProjects(true);
            setDescription(false);
            setSocial(false);
        }
    }

    function activeModalSocial() {
        if (!social) {
            setSocial(true);
            setDescription(false);
            setProjects(false);
        }
    }

    //End functions to open modal pages

    return (
        <div className={styles.contentMainProfile}>
            <Leftbar />
            {renderProfiles}
        </div>
    )
}
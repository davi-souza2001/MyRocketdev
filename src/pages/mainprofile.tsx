import { useState } from "react";
import Image from "next/image";
import Leftbar from "../components/Leftbar";
import AstroLike from "../assets/img/austrolike.jpg";
import Austroone from "../assets/img/austroone.jpg";
import useProfile from "../data/hook/useProfile";
import useAuth from "../data/hook/useAuth";

import styles from "../styles/ContentMainProfile.module.css";

interface MainProfileProps {

}

export default function MainProfile(Props: MainProfileProps) {
    const { profileList } = useProfile();
    const { user } = useAuth();

    const [description, setDescription] = useState(true);
    const [projects, setProjects] = useState(false);
    const [social, setSocial] = useState(false);

    const renderProfiles = profileList.map(
        function (prof, index){
            if(prof.email == user?.email)
            return (
                <div className={styles.MainProfile} key={index}>
                    <div className={styles.imgBackground}>
                        <Image src={AstroLike} alt="Astronauta dando like" height={200} width={200} />
                    </div>
                    <div className={styles.imgProfileUser}>
                        <Image src={Austroone} alt="Foto de Perfil"></Image>
                        <h3>{prof.name}</h3>
                        <p>@{prof.userName}</p>
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
                            <div className={styles.descriptionProfile}>
                                <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Projeto 01</a></h3>
                            </div>
                            <div className={styles.descriptionProfile}>
                                <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Projeto 02</a></h3>
                            </div>
                            <div className={styles.descriptionProfile}>
                                <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Projeto 03</a></h3>
                            </div>
                            <div className={styles.descriptionProfile}>
                                <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Projeto 04</a></h3>
                            </div>
                            <div className={styles.descriptionProfile}>
                                <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Projeto 05</a></h3>
                            </div>
                            <div className={styles.descriptionProfile}>
                                <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Projeto 06</a></h3>
                            </div>
                        </div>
                    </>
                ) : <div></div>}

                {social ? (
                    <>
                        <div className={styles.descriptionProfile}>
                            <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Likedin: {prof.linkedin}</a></h3>
                        </div>
                        <div className={styles.descriptionProfile}>
                            <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">GitHub: {prof.github}</a></h3>
                        </div>
                        <div className={styles.descriptionProfile}>
                            <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Instagram: {prof.instagram}</a></h3>
                        </div>
                        <div className={styles.descriptionProfile}>
                            <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Youtube: {prof.youtube}</a></h3>
                        </div>
                    </>
                ) : false}
            </div>
            )
        }
    )

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

    return (
        <div className={styles.contentMainProfile}>
            <Leftbar />
            {renderProfiles}
        </div>
    )
}
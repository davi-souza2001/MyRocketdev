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

export default function MainProfile(Props: MainProfileProps){
    const { profileList } = useProfile();
    const { user } = useAuth();

    const [name, setName] = useState("");

    const [description, setDescription] = useState(true);
    const [projects, setProjects] = useState(false);
    const [social, setSocial] = useState(false);
    

    function activeModalDescription(){
        if(!description){
            setDescription(true);
            setProjects(false);
            setSocial(false);
        }
    }

    function activeModalProjects(){
        if(!projects){
            setProjects(true);
            setDescription(false);
            setSocial(false);
        }
    }

    function activeModalSocial(){
        if(!social){
            setSocial(true);
            setDescription(false);
            setProjects(false);
        }
    }

    return (
        <div className={styles.contentMainProfile}>
            <Leftbar/>
            <div className={styles.MainProfile}>
                <div className={styles.imgBackground}>
                    <Image src={AstroLike} alt="Astronauta dando like" height={200} width={200}/>
                </div>
                <div className={styles.imgProfileUser}>
                    <Image src={Austroone} alt="Foto de Perfil"></Image>
                    <h3>{name}</h3>
                    <p>@davisouzadev</p>
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
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum odit minima quisquam nam animi exercitationem quod, officia adipisci? Cum quis hic reiciendis quisquam aut repellendus consectetur perferendis, tempora quas tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam inventore magnam, nesciunt cum modi reprehenderit obcaecati soluta ex recusandae laudantium in consectetur expedita optio ea, excepturi doloremque doloribus quia distinctio?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nisi voluptatum fugit facere amet! Temporibus quasi, qui ipsa laboriosam expedita, nam laudantium quod quas blanditiis reiciendis dolore excepturi soluta consecteturlorem lorem</h3>
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
                            <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Likedin: davi-souza2001</a></h3>
                        </div>
                        <div className={styles.descriptionProfile}>
                            <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">GitHub: davi-souza2001</a></h3>
                        </div>
                        <div className={styles.descriptionProfile}>
                            <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Instagram: davi-souza2001</a></h3>
                        </div>
                        <div className={styles.descriptionProfile}>
                            <h3><a href="https://www.linkedin.com/in/davi-souza2001/" target="_blank" rel="noreferrer">Youtube: davi-souza2001</a></h3>
                        </div>
                   </>
                ) : <div></div>} 
            </div>
        </div>
    )
}
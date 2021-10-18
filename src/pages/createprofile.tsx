import { useState } from "react";
import firebase from "../firebase/config";
import route from "next/router";
import useAuth from "../data/hook/useAuth";
import useProfile from "../data/hook/useProfile";
import Image from "next/image";

import astroBallon from "../assets/img/astronauta_balao.svg"

import styles from "../styles/CreateProfile.module.css";

interface CreateProfileProps {

}

export default function CreateProfile(Props: CreateProfileProps) {
    const { profileList } = useProfile();
    const { user } = useAuth();
    const emailUser = user?.email;

    const verifyEmailExists = profileList?.map((prof) => {
        if(prof.email == emailUser) {
            route.replace("/");
        }
    })
    
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");
    const [description, setDescription] = useState("");
    const [dev, setDev] = useState("");
    const [local, setLocal] = useState("");
    const [email, setEmail] = useState(emailUser);
    const image = user?.imagemUrl;

    async function setDatas(){
        const todoRef = await firebase.database().ref("Profiles");
        const datas = {
            name,
            userName,
            email,
            linkedin,
            github,
            instagram,
            youtube,
            dev,
            description,
            local,
            image
        };
        todoRef.push(datas);
    }
    
    async function navigateToHome(e){
        e.preventDefault();
        try{
            await setDatas();
        } finally {
            route.push("/");
        }
   }

    return (
        <div className={styles.contentGeral}>
            <div className={styles.astroBallon}>
                <Image src={astroBallon} height={900} alt="Astro"/>
            </div>
            <div className={styles.contentForms}>
                <form>
                    <h2>Cadastro</h2>
                    <input required type="text" placeholder="Digite seu nome publico" onChange={(e) => setName(e.target.value)}/>
                    <input required type="text" placeholder="Digite seu @ no qual as pessoas vão procurar você" onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Digite seu @ no Linkedin" onChange={(e) => setLinkedin(e.target.value)} />
                    <input required type="text" placeholder="Digite seu @ no Github" onChange={(e) => setGithub(e.target.value)} />
                    <input type="text" placeholder="Digite seu @ no Instagram" onChange={(e) => setInstagram(e.target.value)} />
                    <input type="text" placeholder="Digite seu @ no Youtube" onChange={(e) => setYoutube(e.target.value)} />
                    <select required onChange={(e) => setDev(e.target.value)} value={dev}>
                        <option disabled selected >Senioridade</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                        <option value="Full-Stack">Full-Stack</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Dados">Dados</option>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>
                    <input required type="text" placeholder="Adicione uma descrição sobre você" onChange={(e) => setDescription(e.target.value)} />
                    <input required type="text" placeholder="De qual estado você é ?" onChange={(e) => setLocal(e.target.value)} />
                    <p>Ao se cadastrar você concorda com os termos de uso da rede social. Deseja ler ? então clique <a href="https://github.com/davi-souza2001/MyRocketdev" target="_blank" rel="noreferrer">aqui</a> </p>
                    <button type="submit" className={styles.buttonSubmit} onClick={navigateToHome}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
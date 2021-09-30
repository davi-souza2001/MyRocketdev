import { useState } from "react";
import firebase from "../firebase/config";
import route from "next/router";
import useAuth from "../data/hook/useAuth";


import styles from "../styles/CreateProfile.module.css";

interface CreateProfileProps {

}

export default function CreateProfile(Props: CreateProfileProps) {
    const { user } = useAuth();

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");
    const [description, setDescription] = useState("");
    const [dev, setDev] = useState("");
    const [local, setLocal] = useState("");
    const [email, setEmail] = useState("");

    async function setDatas(){
        const emailUser = await user?.email;
        setEmail(emailUser);
        const todoRef = await firebase.database().ref("Profiles");
        const datas = {
            name,
            userName,
            linkedin,
            github,
            instagram,
            youtube,
            description,
            dev,
            local,
            email
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
            <div className={styles.contentForms}>
                <form>
                    <h2>Cadastro</h2>
                    <input type="text" placeholder="Digite seu nome publico" onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Digite seu @ no qual as pessoas vão procurar você" onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Linkedin" onChange={(e) => setLinkedin(e.target.value)} />
                    <input type="text" placeholder="Github" onChange={(e) => setGithub(e.target.value)} />
                    <input type="text" placeholder="Instagrm" onChange={(e) => setInstagram(e.target.value)} />
                    <input type="text" placeholder="Youtube" onChange={(e) => setYoutube(e.target.value)} />
                    <input type="text" placeholder="Digite a area dev que você atua ou pretende" onChange={(e) => setDev(e.target.value)} />
                    <input type="text" placeholder="Adicione uma descrição sobre você" onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" placeholder="De qual estado você é ?" onChange={(e) => setLocal(e.target.value)} />
                    <p>Ao se cadastrar você concorda com os termos de uso da rede social. Deseja ler ? então clique <a href="https://github.com/davi-souza2001/MyRocketdev" target="_blank" rel="noreferrer">aqui</a> </p>
                    <button type="submit" className={styles.buttonSubmit} onClick={navigateToHome}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
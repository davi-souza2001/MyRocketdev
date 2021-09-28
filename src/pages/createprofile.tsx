import { useState } from "react";
import route from "next/router";
import styles from "../styles/CreateProfile.module.css";
import useAuth from "../data/hook/useAuth";

interface CreateProfileProps {
    
}

export default function CreateProfile(Props: CreateProfileProps){
    const { user } = useAuth();

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function navigateToNextRoom(e: any) {
        e.preventDefault();
        const datas = {
            name,
            userName,
            linkedin,
            github,
            instagram,
            youtube,
            description,
            email,
            password
        }

        console.log(datas);
    }

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentForms}>
                <form>
                    <h2>{user.name}</h2>
                    <input type="text" placeholder="Digite seu nome publico" onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Digite seu @ no qual as pessoas vão procurar você" onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Linkedin" onChange={(e) => setLinkedin(e.target.value)} />
                    <input type="text" placeholder="Github" onChange={(e) => setGithub(e.target.value)} />
                    <input type="text" placeholder="Instagrm" onChange={(e) => setInstagram(e.target.value)} />
                    <input type="text" placeholder="Youtube" onChange={(e) => setYoutube(e.target.value)}/>
                    <input type="text" placeholder="Adicione uma descrição sobre você" onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                    <p>Ao se cadastrar você concorda com os termos de uso da rede social. Deseja ler ? então clique <a href="https://github.com/davi-souza2001/Myrocket" target="_blank" rel="noreferrer">aqui</a> </p>
                    <button type="submit" className={styles.buttonSubmit} onClick={navigateToNextRoom}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
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
    });
    
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");
    const [description, setDescription] = useState("");
    const [dev, setDev] = useState("");
    const [firstComum, setFirstComum] = useState("");
    const [secondComum, setSecondComum] = useState("");
    const [thirdComum, setThirdComum] = useState("");
    const [local, setLocal] = useState("");
    const [email, setEmail] = useState(emailUser);
    const image = user?.imagemUrl;
    const [check, setCheck] = useState(0);


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
            firstComum,
            secondComum,
            thirdComum,
            description,
            local,
            image
        };
        todoRef.push(datas);
    }
    
    async function navigateToHome(e): Promise<void>{
        e.preventDefault();
        if(github != "" && userName != "" && name != "" && dev != "" && email != "" && check == 1){
            try{
                await setDatas();
            } finally {
                route.push("/");
            }
        } else{
            alert("Por favor verifique se os campos: Nick, Nome público, Github, Email e/ou Senioridade foram preenchidos. Ou aceite os Termos.")
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
                    <input type="text" placeholder="Digite seu nome público" onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Digite seu nick que você deseja usar" onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Digite seu @ no Linkedin (sem o @)" onChange={(e) => setLinkedin(e.target.value)} />
                    <input required type="text" placeholder="Digite seu @ no Github (sem o @)" onChange={(e) => setGithub(e.target.value)} />
                    <input type="text" placeholder="Digite seu @ no Instagram (sem o @)" onChange={(e) => setInstagram(e.target.value)} />
                    <input type="text" placeholder="Digite seu @ no Youtube (sem o @)" onChange={(e) => setYoutube(e.target.value)} />
                    <select required onChange={(e) => setDev(e.target.value)} value={dev}>
                        <option defaultValue="Senioridade" >--Senioridade--</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                        <option value="Full-Stack">Full-Stack</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Dados">Dados</option>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>
                    <h3>Escolha 3 tecnologias para você ter no seu feed:</h3>
                    <select required onChange={(e) => setFirstComum(e.target.value)} value={firstComum} className={styles.contentComum}>
                        <option defaultValue="Senioridade">--Front-End--</option>
                            <option value="React">ReactJs</option>
                            <option value="Angular">AngularJs</option>
                            <option value="Vue">Vuejs</option>
                            <option value="Next">NextJs</option>
                            <option value="Ember">Ember</option>
                        <option defaultValue="Senioridade">--Back-End--</option>
                            <option value="Node">NodeJs</option>
                            <option value="Mongo">MongoDb</option>
                            <option value="Sql">Sql</option>
                            <option value="Firebase">Firebase</option>
                            <option value="CSharp">CSharp</option>
                            <option value="Java">Java</option>
                        <option defaultValue="Senioridade">--Mobile--</option>
                            <option value="React-Native">React-Native</option>
                            <option value="Flutter">Flutter</option>
                            <option value="Swift">Swift</option>
                            <option value="Ionic">Ionic</option>
                    </select>
                    <select required onChange={(e) => setSecondComum(e.target.value)} value={secondComum} className={styles.contentComum}>
                        <option defaultValue="Senioridade">--Front-End--</option>
                            <option value="React">ReactJs</option>
                            <option value="Angular">AngularJs</option>
                            <option value="Vue">Vuejs</option>
                            <option value="Next">NextJs</option>
                            <option value="Ember">Ember</option>
                        <option defaultValue="Senioridade">--Back-End--</option>
                            <option value="Node">NodeJs</option>
                            <option value="Mongo">MongoDb</option>
                            <option value="Sql">Sql</option>
                            <option value="Firebase">Firebase</option>
                            <option value="CSharp">CSharp</option>
                            <option value="Java">Java</option>
                        <option defaultValue="Senioridade">--Mobile--</option>
                            <option value="React-Native">React-Native</option>
                            <option value="Flutter">Flutter</option>
                            <option value="Swift">Swift</option>
                            <option value="Ionic">Ionic</option>
                    </select>
                    <select required onChange={(e) => setThirdComum(e.target.value)} value={thirdComum} className={styles.contentComum}>
                        <option defaultValue="Senioridade">--Front-End--</option>
                            <option value="React">ReactJs</option>
                            <option value="Angular">AngularJs</option>
                            <option value="Vue">Vuejs</option>
                            <option value="Next">NextJs</option>
                            <option value="Ember">Ember</option>
                        <option defaultValue="Senioridade">--Back-End--</option>
                            <option value="Node">NodeJs</option>
                            <option value="Mongo">MongoDb</option>
                            <option value="Sql">Sql</option>
                            <option value="Firebase">Firebase</option>
                            <option value="CSharp">CSharp</option>
                            <option value="Java">Java</option>
                        <option defaultValue="Senioridade">--Mobile--</option>
                            <option value="React-Native">React-Native</option>
                            <option value="Flutter">Flutter</option>
                            <option value="Swift">Swift</option>
                            <option value="Ionic">Ionic</option>
                    </select>
                    <input required type="text" placeholder="Adicione uma descrição sobre você" onChange={(e) => setDescription(e.target.value)} />
                    <input required type="text" placeholder="De qual estado você é ?" onChange={(e) => setLocal(e.target.value)} />
                    <div className={styles.termsAndConditionsArea}>
                        <input className={styles.termsAndConditions} type="checkbox" value={check} onClick={() => {setCheck(1)}}></input>
                        <label>Você concorda com os <a href="https://github.com/davi-souza2001/MyRocketdev" target="_blank" rel="noreferrer">Termos e Condições</a>?</label>
                    </div>
                    <button type="submit" className={styles.buttonSubmit} onClick={navigateToHome}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
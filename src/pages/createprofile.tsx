import { useState } from "react";
import firebase from "../firebase/config";
import route from "next/router";
import useAuth from "../data/hook/useAuth";
import useProfile from "../data/hook/useProfile";
import Image from "next/image";

import astroBallon from "../assets/img/astronauta_balao.svg"

import styles from "../styles/CreateProfile.module.css";

export default function CreateProfile() {
    const { profileList } = useProfile();
    const { user } = useAuth();
    const emailUser = user?.email;

    // Função que checa se o email logado já se encontra cadastro em algum perfil, se sim ele retorna para
    // a pagina inicial, pois não se faz necessário criar perfil

    const verifyEmailExists = profileList?.map((prof) => {
        if (prof.email == emailUser) {
            route.replace("/");
        }
    });

    // Declaração das variaveis que vão armazenar os dados do usuário criando perfil, como email, nome, github

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


    // Função assicrona que vai esperar o retorno do firebase com a lista de perfis e em seguida vai enviar
    // os dados coletados para a pagina de perfis
    async function setDatas() {
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

    // Função que obriga o usuário à não deixar o github, nome, nick, email...
    //  em branco pois é um ponto necessário para melhor uso do sistema

    async function navigateToHome(e): Promise<void> {
        e.preventDefault();
        if (github != "" && userName != "" && name != "" && dev != "" && email != "" && firstComum != "" && check == 1 && user != null) {
            try {
                await setDatas();
            } finally {
                route.push("/");
            }
        } else {
            if (user) {
                alert("Por favor verifique se os campos: Nick, Nome público, Github, Email e/ou Senioridade foram preenchidos. Ou aceite os Termos.")
            } else (
                alert("Por favor se logue com uma conta Email ou Github.")
            )
        }
    }

    return (
        <div className={styles.contentGeral}>
            <div className={styles.astroBallon}>
                <Image src={astroBallon} height={999} alt="Astro" />
            </div>
            <div className={styles.contentForms}>
                <form>
                    <h2>Cadastro</h2>
                    <input type="text" placeholder="Digite seu nome público" onChange={(e) => setName(e.target.value)} />
                    <p>Crie um nome de usuário simples para que outros astronautas possam te encontrar!</p>
                    <input type="text" placeholder="Digite seu nome de usuário" onChange={(e) => setUserName(e.target.value)} />
                    <div className={styles.contentSocialMedia}>
                        <input className={styles.inputSocialMedia} type="text" placeholder="Digite seu @ no Linkedin (sem o @)" onChange={(e) => setLinkedin(e.target.value)} />
                        <input required type="text" placeholder="Digite seu @ no Github (sem o @)" onChange={(e) => setGithub(e.target.value)} />
                    </div>
                    <div className={styles.contentSocialMedia}>
                        <input type="text" placeholder="Digite seu @ no Instagram (sem o @)" onChange={(e) => setInstagram(e.target.value)} />
                        <input type="text" placeholder="Digite seu @ no Youtube (sem o @)" onChange={(e) => setYoutube(e.target.value)} />
                    </div>

                    <select required onChange={(e) => setDev(e.target.value)} value={dev}>
                        <option defaultValue="Senioridade" >--Área--</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                        <option value="Full-Stack">Full-Stack</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Dados">Dados</option>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>
                    <h3>Escolha 3 tecnologias para você ter no seu feed:</h3>
                    <p style={{marginBottom: "10px"}}>A primeira área precisa ser preenchida!</p>
                    <div className={styles.selectCommunity}>
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
                    </div>
                    <div className={styles.contentDescriptionArea}>
                        {/* <input required type="text" placeholder="Adicione uma descrição sobre você" onChange={(e) => setDescription(e.target.value)} /> */}
                        <textarea name="dasd" id="dasd" cols={30} rows={10} placeholder="Adicione uma descrição sobre você" onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <input required type="text" placeholder="De qual país você é?" onChange={(e) => setLocal(e.target.value)} />
                    <div className={styles.termsAndConditionsArea}>
                        <input className={styles.termsAndConditions} type="checkbox" value={check} onClick={() => { setCheck(1) }}></input>
                        <label>Você concorda com os <a href="https://github.com/davi-souza2001/MyRocketdev" target="_blank" rel="noreferrer">Termos e Condições</a>?</label>
                    </div>
                    <button type="submit" className={styles.buttonSubmit} onClick={navigateToHome}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
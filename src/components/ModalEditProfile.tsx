import { useEffect, useState } from "react";
import Image from "next/image";
import firebase from "../firebase/config";
import useAuth from "../data/hook/useAuth";
import useProfile from "../data/hook/useProfile";

import edit from "../assets/img/editar.png";

import styles from "../styles/ModalEditProfile.module.css";

interface ModalEditProfile {
    modalActivity: any;
    closeModal: any;
}

export default function ModalEditProfile(props: ModalEditProfile) {

    const { user } = useAuth();
    const { profileList } = useProfile();
    const emailUser = user?.email;
    const image = user?.imagemUrl;
    const [email, setEmail] = useState(emailUser);



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

    const [key, setKey] = useState("");

    // Executa uma função que percorre os perfis dos usuários. Se o email logado for igual ao email do perfil
    // ele irá setar todos os dados mudaveis do perfil nas variaveis. Essas variaveis vão ser responsaveis
    // pela por gerenciar os dados que forem trocados

    useEffect(() => {
        const renderProfiles = profileList.map(
            function (prof) {
                if (prof.email == user?.email) {
                    setName(prof.name);
                    setUserName(prof.userName);
                    setLinkedin(prof.linkedin);
                    setGithub(prof.github);
                    setInstagram(prof.instagram);
                    setYoutube(prof.youtube);
                    setDescription(prof.description);
                    setDev(prof.dev)
                    setFirstComum(prof.firstComum)
                    setSecondComum(prof.secondComum)
                    setThirdComum(prof.thirdComum)
                    setLocal(prof.local)
                    setKey(prof.id)
                }
            })
    }, [])

    // Envia as novas variaveis, com o dados mudados, para o perfil ja existente da pessoa. Ocorrendo então a edição
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
        todoRef.child(key).update(datas);
    }

    // Espera a função de mudança de dados executar depois envia os dados para o firebase
    async function editProfile(e){
        e.preventDefault();
        try{
            await setDatas();
        } catch(e) {
           console.log(e);
        }
   }

    return (
        <div className={styles.contentGeral}>
            <div className={styles.bckgdForms} onClick={props.modalActivity}/>
                <div className={styles.forms}>
                    <div className={styles.editImg}>
                        <Image src={edit} height={60} width={75}/>
                    </div>
                
                    <form>
                        <input type="text" placeholder="Digite seu nome publico" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Digite seu @ no qual as pessoas vão procurar você" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <input type="text" placeholder="Digite seu @ no Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                        <input type="text" placeholder="Digite seu @ no Github" value={github} onChange={(e) => setGithub(e.target.value)} />
                        <input type="text" placeholder="Digite seu @ no Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                        <input type="text" placeholder="Digite seu @ no Youtube" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
                        <select  onChange={(e) => setDev(e.target.value)} value={dev}>
                            <option defaultValue="Senioridade" >--Senioridade--</option>
                            <option value="Front-End">Front-End</option>
                            <option value="Back-End">Back-End</option>
                            <option value="Full-Stack">Full-Stack</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Dados">Dados</option>
                            <option value="IOS">IOS</option>
                            <option value="Android">Android</option>
                        </select>
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
                        <select  onChange={(e) => setSecondComum(e.target.value)} value={secondComum} className={styles.contentComum}>
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
                        <select  onChange={(e) => setThirdComum(e.target.value)} value={thirdComum} className={styles.contentComum}>
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
                        <input required className={styles.description} type="text" placeholder="Adicione uma descrição sobre você" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <input required type="text" placeholder="De qual estado você é ?" value={local} onChange={(e) => setLocal(e.target.value)} />
                        <div className={styles.buttons}> 
                            <button type="submit" className={styles.buttonSubmit} onClick={editProfile}><strong onClick={props.closeModal}>Editar</strong></button>
                            <div className={styles.modalActivity} onClick={props.modalActivity}>
                                <h3>Cancelar</h3>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    )
}

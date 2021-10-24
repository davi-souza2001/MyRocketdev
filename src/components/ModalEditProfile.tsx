import { useEffect, useState } from "react";
import firebase from "../firebase/config";
import useAuth from "../data/hook/useAuth";
import styles from "../styles/ModalEditProfile.module.css";
import useProfile from "../data/hook/useProfile";

interface ModalEditProfile {
    modalActivity: any;
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

    useEffect(() => {
        const renderProfiles = profileList.map(
            function (prof, index) {
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
                }
            })
    }, [])

    async function setDatas() {
        /* const todoRef = await firebase.database().ref("Profiles"); */
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
        /* todoRef.push(datas); */
        console.log(datas);
    }

    async function editProfile(e){
        e.preventDefault();
        try{
            await setDatas();
        } finally {
           console.log("errouu");
        }
   }

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentForms}>
                <div className={styles.modalActivity} onClick={props.modalActivity}>
                    Me aperte
                </div>
                <form>
                    <input required type="text" placeholder="Digite seu nome publico" value={name} onChange={(e) => setName(e.target.value)} />
                    <input required type="text" placeholder="Digite seu @ no qual as pessoas vão procurar você" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Digite seu @ no Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                    <input required type="text" placeholder="Digite seu @ no Github" value={github} onChange={(e) => setGithub(e.target.value)} />
                    <input type="text" placeholder="Digite seu @ no Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                    <input type="text" placeholder="Digite seu @ no Youtube" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
                    <select required onChange={(e) => setDev(e.target.value)} value={dev}>
                        <option selected >--Senioridade--</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                        <option value="Full-Stack">Full-Stack</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Dados">Dados</option>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>
                    <select required onChange={(e) => setFirstComum(e.target.value)} value={firstComum} className={styles.contentComum}>
                        <option selected>--Front-End--</option>
                        <option value="React">ReactJs</option>
                        <option value="Angular">AngularJs</option>
                        <option value="Vue">Vuejs</option>
                        <option value="Next">NextJs</option>
                        <option value="Ember">Ember</option>
                        <option selected>--Back-End--</option>
                        <option value="Node">NodeJs</option>
                        <option value="Mongo">MongoDb</option>
                        <option value="Sql">Sql</option>
                        <option value="Firebase">Firebase</option>
                        <option value="CSharp">CSharp</option>
                        <option value="Java">Java</option>
                        <option selected>--Mobile--</option>
                        <option value="React-Native">React-Native</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Swift">Swift</option>
                        <option value="Ionic">Ionic</option>
                    </select>
                    <select required onChange={(e) => setSecondComum(e.target.value)} value={secondComum} className={styles.contentComum}>
                        <option selected>--Front-End--</option>
                        <option value="React">ReactJs</option>
                        <option value="Angular">AngularJs</option>
                        <option value="Vue">Vuejs</option>
                        <option value="Next">NextJs</option>
                        <option value="Ember">Ember</option>
                        <option selected>--Back-End--</option>
                        <option value="Node">NodeJs</option>
                        <option value="Mongo">MongoDb</option>
                        <option value="Sql">Sql</option>
                        <option value="Firebase">Firebase</option>
                        <option value="CSharp">CSharp</option>
                        <option value="Java">Java</option>
                        <option selected>--Mobile--</option>
                        <option value="React-Native">React-Native</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Swift">Swift</option>
                        <option value="Ionic">Ionic</option>
                    </select>
                    <select required onChange={(e) => setThirdComum(e.target.value)} value={thirdComum} className={styles.contentComum}>
                        <option selected>--Front-End--</option>
                        <option value="React">ReactJs</option>
                        <option value="Angular">AngularJs</option>
                        <option value="Vue">Vuejs</option>
                        <option value="Next">NextJs</option>
                        <option value="Ember">Ember</option>
                        <option selected>--Back-End--</option>
                        <option value="Node">NodeJs</option>
                        <option value="Mongo">MongoDb</option>
                        <option value="Sql">Sql</option>
                        <option value="Firebase">Firebase</option>
                        <option value="CSharp">CSharp</option>
                        <option value="Java">Java</option>
                        <option selected>--Mobile--</option>
                        <option value="React-Native">React-Native</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Swift">Swift</option>
                        <option value="Ionic">Ionic</option>
                    </select>
                    <input required type="text" placeholder="Adicione uma descrição sobre você" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input required type="text" placeholder="De qual estado você é ?" value={local} onChange={(e) => setLocal(e.target.value)} />
                    <button type="submit" className={styles.buttonSubmit} onClick={editProfile}>Editar</button>
                </form>
            </div>
        </div>
    )
}

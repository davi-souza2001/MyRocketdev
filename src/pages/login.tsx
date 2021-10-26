import { useState } from "react";
import Image from "next/image";
import useAuth from "../data/hook/useAuth";

import githubIcon from "../assets/img/GithubIcon.svg";
import googleIcon from "../assets/img/GoogleIcon.png";
import rocket from "../assets/img/foguete.svg";
import astroMyRocket from "../assets/img/astrounauta.svg";
import astro from "../assets/img/astronauta_dab.svg";

import styles from "../styles/Login.module.css";


export default function Login(){
    const { loginGoogle, loginWithEmailAndPassword, createUserWithEmailAndPassword} = useAuth();
    const [boxone, setBoxone] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lookCreate, setLookCreate] = useState(false);
    const [lookLogin, setLookLogin] = useState(true);

    function changebox() {
        if (boxone) {
            setBoxone(false);
        } else{
            setBoxone(true);
        }
    }

    async function createUser(e){
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(email, password);
        } catch(e) {
            alert(e?.message);
        }
    }

    async function loginWithEmail(e){
        e.preventDefault();
        try{
            await loginWithEmailAndPassword(email, password);
        } catch(e) {
            alert(e);
        }
    }

    function toggle(e){
        e.preventDefault();
        setLookCreate(true);
        setLookLogin(false);
    }

    return (
        <div className={styles.content}>
            {boxone ? (
                <div className={styles.imgwelcome}>
                    <Image src={astro} alt="astronauta boas vindas" className={styles.imgAstro}></Image>
                    
                    <div className={styles.mensagelogin}>
                        <h1>Bem vindo a bordo!</h1>
                        <h3>Aqui garantimos que você decole com a melhor experiência.</h3>
                    </div>
                    <div className={styles.learmore}>
                        <div className={styles.morecontent} onClick={changebox}>
                            <h4>Ler mais</h4>
                        </div>
                    </div>
                </div>
            ): (
                <div className={styles.imgwelcome}>
                    <Image src={rocket} alt="astronauta boas vindas"></Image>
                    <div className={styles.mensagemore}>
                        <h1>Bem vindo ao MyRocket!</h1>
                        <h3>Neste foguete é onde os desenvolvedores podem chamar outros em sua jornada, comentar sobre suas tecnologias preferidas, comentar como anda o mercado ou até tirar dúvidas com outros tripulantes</h3>
                    </div>
                    <div className={styles.learmore}>
                        <div className={styles.morecontent} onClick={changebox}>
                            <h4>Voltar</h4>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.loginwelcome}>
                <form>
                    <div className={styles.contentMyRocketAndRocket}>
                        <div className={styles.imageIntoMyrocket}>
                            <Image src={astroMyRocket} alt="astro" height={900}/>
                        </div>
                        <h2>MyRocket</h2>
                    </div>
                    <input type="text" placeholder="Email" className={styles.email} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className={styles.password} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {lookLogin ? <input type="submit" value="Login" className={styles.login} onClick={loginWithEmail}/> : false}
                    {lookCreate ? <> <input type="submit" value="Cadastrar" className={styles.create} onClick={createUser}/>  </>: <input type="submit" value="Cadastrar" className={styles.create} onClick={toggle}/>}
                </form>
                <div className={styles.line}></div>
                <div className={styles.logingoogle}>
                    <button onClick={loginGoogle}>
                        <Image src={googleIcon} height={19} alt="Logo" width={20}/>
                    </button>
                    <button className={styles.githubButton}>
                        <Image src={githubIcon} height={35} alt="Logo" width={60}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";


import Image from "next/image";
import astro from "../assets/img/austrotwo.jpg";
import astrobye from "../assets/img/austrogoodbye.jpg";
import styles from "../styles/Login.module.css";
import useAuth from "../data/hook/useAuth";


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
                        <h1>Welcome aboard my friend</h1>
                        <h3>Your rocket with all astronauts for your trip !</h3>
                    </div>
                    <div className={styles.learmore}>
                        <div className={styles.morecontent} onClick={changebox}>
                            <h4>Learn More</h4>
                        </div>
                    </div>
                </div>
            ): (
                <div className={styles.imgwelcome}>
                    <Image src={astrobye} alt="astronauta boas vindas"></Image>
                    <div className={styles.mensagemore}>
                        <h1>Welcome to MyRocket</h1>
                        <h3>Here on this rocket is where the devs can call others on their journey, and for them to be found too. Did you like it ? So come be part of our rocket, because its all yours too! You can create your profile only in tabs login and password or login with google</h3>
                    </div>
                    <div className={styles.learmore}>
                        <div className={styles.morecontent} onClick={changebox}>
                            <h4>To Back</h4>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.loginwelcome}>
                <form>
                    <h2>Welcome to MyRocket</h2>
                    <input type="text" placeholder="Email" className={styles.email} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className={styles.password} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {lookLogin ? <input type="submit" value="Login" className={styles.login} onClick={loginWithEmail}/> : false}
                    {lookCreate ? <> <input type="submit" value="Cadastrar" className={styles.create} onClick={createUser}/>  </>: <input type="submit" value="Cadastrar" className={styles.create} onClick={toggle}/>}
                </form>
                <p className={styles.p}>Or</p>
                <div className={styles.logingoogle}>
                    <button onClick={loginGoogle}>Google</button>
                </div>
            </div>
        </div>
    )
}
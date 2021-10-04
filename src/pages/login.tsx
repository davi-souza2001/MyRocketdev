import { useState } from "react";
import route from "next/router";


import Image from "next/image";
import astro from "../assets/img/austrotwo.jpg";
import astrobye from "../assets/img/austrogoodbye.jpg";
import styles from "../styles/Login.module.css";
import useAuth from "../data/hook/useAuth";


export default function Login(){
    const { loginGoogle } = useAuth();
    const [boxone, setBoxone] = useState(true);

    function changebox() {
        if (boxone) {
            setBoxone(false);
        } else{
            setBoxone(true);
        }
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
                        <h3>Here on this rocket is where the devs can call others on their journey, and for them to be found too. Did you like it ? So come be part of our rocket, because it's all yours too!</h3>
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
                    <input type="text" placeholder="Email" className={styles.email} disabled />
                    <input type="password" placeholder="Password" className={styles.password} disabled/>
                    <input type="submit" value="Login"disabled className={styles.login}/>
                </form>
                <p className={styles.p}>Or</p>
                <div className={styles.logingoogle}>
                    <button onClick={loginGoogle}>Google</button>
                </div>
                <div className={styles.registration}>
                    <button disabled>Registrar-se</button>
                </div>
            </div>
        </div>
    )
}
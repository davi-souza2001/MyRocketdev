import route from "next/router";

import styles from "../styles/Resume.module.css";


export default function Resume() {
    return (
        <div className={styles.geralContent}>

            <div className={styles.fade}></div>

            <section className={styles.starWars}>
                <div className={styles.crawl}>
                    <div className={styles.title}>
                        <p>Seja bem vindo(a) ao</p>
                        <h1>MyRocket</h1>
                    </div>

                    <p>Sinta-se a vontade para decolar para os planetas mais legais da galáxia, quando estiver preparado sinta-se  a vontade para conhecer outros tripulantes que vão estar com você nessa jornada e lembre-se, estamos todos juntos nessa!</p>

                    <p>Aqui você pode ver o que os devs estão comentando sobre sua tec favorita, ou ainda mais, se você se sente com dúvida por onde começar ou em dúvida sobre algo dela, temos uma tripulação te esperando para dar o melhor suporte para você!</p>

                    <p>Então se você quer decolar também preparamos tudo para você, basta fazer o login que vamos te ajudar no resto!</p>

                    {/* <p onClick={() => route.push("/login")}><strong>Clique aqui para embarcar!</strong></p> */}
                    <button style={{color: "#000", width: "20vw", height: "20vh", fontSize: "30px", backgroundColor: "#feda4a", borderRadius: "5px", fontWeight: "bold", cursor: "pointer"}} onClick={() => route.push("/login")}>Clique aqui para embarcar</button>
                </div>
            </section>
        </div>
    )
}

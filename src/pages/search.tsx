import { useEffect, useState } from "react";
import route from "next/router";
import Head from "next/head";

import Topbar from "../components/Topbar";
import Profile from "../components/Profile";
import useProfile from "../data/hook/useProfile";

import astro from "../assets/img/austroone.jpg";
import styles from "../styles/Search.module.css";

interface searchProps {

}

export default function Search(Props: searchProps) {
    const { profileList } = useProfile();
    const [profSearch, setProfSearch] = useState("");
    const [changeSearch, setChangeSearch] = useState("Área");

    // Função que verifica se o usuário selecionou por pesquisar por nome, área ou nick
    // dependendo da opção as regras para pesquisa mudam

    useEffect(() => {
        if (changeSearch == "Área") {
            if (profSearch == "full-stack") {
                setProfSearch("Full-Stack")
            } else if (profSearch == "front-end") {
                setProfSearch("Front-End")
            } else if (profSearch == "back-end") {
                setProfSearch("Back-End")
            } else if (profSearch == "mobile") {
                setProfSearch("Mobile")
            } else if (profSearch == "dados") {
                setProfSearch("Dados")
            } else if (profSearch == "ios") {
                setProfSearch("IOS")
            } else if (profSearch == "android") {
                setProfSearch("Android")
            }
        }

        // Função que vai separar a string em um array e cada valor desse array vai ser contato por espaço,
        // ou seja se for digitado "davi souza",  o array ficaria [davi, souza].
        // Para cada valor desse array ele pega a primeira letra atraves do "slice" e tranformar em Uppercase
        if (changeSearch == "Nome") {
            function titleize(text: String) {
                let words = text.toLowerCase().split(" ");
                for (let a = 0; a < words.length; a++) {
                    let w = words[a];
                    words[a] = w[0]?.toUpperCase() + w.slice(1);
                }
                setProfSearch(words.join(" "));
            }
            titleize(profSearch)
        }

    }, [profSearch])

    function changeSearchHandleSet() {
        if (changeSearch == "Área") {
            setChangeSearch("Nome")
        }
        if (changeSearch == "Nome") {
            setChangeSearch("Nickname")
        }
        if (changeSearch == "Nickname") {
            setChangeSearch("Área")
        }
    }

    function renderProfiles() {
        return profileList?.map((profile, index) => {
            if (profSearch == profile.userName || profSearch == profile.name || profSearch == profile.dev) {
                return (
                    <div key={index}>
                        <Profile image={profile.image || astro} name={profile.name} dev={profile.dev} local={profile.local} description={profile.description} link={() => route.push(`/${profile.userName}`)} />
                    </div>
                )
            }
        });
    }

    return (
        <div className={styles.searchContent}>
            <Topbar />
            <Head>
                <title>Pesquisa</title>
            </Head>
            <div className={styles.inputContent}>
                <div className={styles.contentInputContent}>
                    <div className={styles.boxInput}>
                        <input type="text" className={styles.input} onChange={(e) => setProfSearch(e.target.value)} placeholder="Ache aqui o astronauta que você procura" />
                    </div>
                    <div className={styles.boxChangeSearchContent} onClick={changeSearchHandleSet}>
                        <h3>{changeSearch}</h3>
                    </div>
                </div>

                <div className={styles.profilesContent}>
                    {renderProfiles()}
                </div>
            </div>
        </div>
    )
}

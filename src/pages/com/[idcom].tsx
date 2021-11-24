import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import Topbar from "../../components/Topbar";
import ListPublis from "../../components/ListPublis";
import AddPost from "../../components/AddPost";
import astroMyRocket from "../../assets/img/astrounauta.svg";

import useAuth from "../../data/hook/useAuth";
import firebase from "../../firebase/config";
import useProfile from "../../data/hook/useProfile";

import styles from "../../styles/Com.module.css"
import CommunityMembers from "../../components/CommunityMembers";

interface idCommunitie {

}

// Cria rota com pasta, pois o next identifica a pasta como se fosse um "/" na rota, então a rota para essa pagina
// seria "/com/algo", pois as [] represental o que o usuário pesquisar na rota do navegador

export default function Com(props: idCommunitie) {
    // Chama a biblioteca de rotas do Next, e declara a variavel idcom como o id que o usuário vai pesquisar,
    // ou seja se o usuário pesquisar "/com/React" a variavel recebe o valor de React
    const router = useRouter();
    const idcom = router.query.idcom;
    const [publisList, setPublisListList] = useState([]);

    // Declaração das variaveis que vão guardar a contagem de likes do 1°, 2° e 3° posts com mais likes

    const [mostLike, setMostLike] = useState(0);
    const [secondMostLike, setSecondmostLike] = useState(0);
    const [thirdMostLike, setThirdMostLike] = useState(0);

    // Declaração das variaveis que vão guardar o conteudo do 1°, 2° e 3° posts com mais likes

    const [postMostLike, setPostMostLike] = useState("");
    const [postSecondMostLike, setPostSecondMostLike] = useState("");
    const [postThirdMostLike, setPostThirdMostLike] = useState("");

    // Declaração das variaveis que vão guardar o nome de quem fez o post do 1°, 2° e 3° posts com mais likes

    const [postMostLikeName, setPostMostLikeName] = useState("");
    const [postSecondMostLikeName, setPostSecondMostLikeName] = useState("");
    const [postThirdMostLikeName, setPostThirdMostLikeName] = useState("");

    // Declaração das variaveis que vão guardar a foto de quem fez o post do 1°, 2° e 3° posts com mais likes

    const [postMostLikePhoto, setPostMostLikePhoto] = useState("");
    const [postSecondMostLikePhoto, setPostSecondMostLikePhoto] = useState("");
    const [postThirdMostLikePhoto, setPostThirdMostLikePhoto] = useState("");


    const { user } = useAuth();
    const { profileList } = useProfile();

    // Função que vai retornar todos os posts feitos naquela comunidade e vai monitorar quando esse conteudo
    // vai sofrer mudanças, com o useEffect

    useEffect(() => {
        const todoRef = firebase.database().ref(idcom?.toString());
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setPublisListList(todoList);
        })
    }, [user]);

    // Função que vai monitorar toda vez que a lista de postagens tiver alterações e vai setar os 3 posts com mais
    // likes

    useEffect(() => {
        const list = publisList?.map((publis) => {
            if(publis.likes){
                if(Object.keys(publis.likes).length > mostLike){
                    setMostLike(Object.keys(publis.likes).length)
                    setPostMostLike(publis.post)
                    setPostMostLikeName(publis.name)
                    setPostMostLikePhoto(publis.photo)
                }
                if(Object.keys(publis.likes).length < mostLike ){
                    if(Object.keys(publis.likes).length > secondMostLike){
                        setSecondmostLike(Object.keys(publis.likes).length)
                        setPostSecondMostLike(publis.post)
                        setPostSecondMostLikeName(publis.name)
                        setPostSecondMostLikePhoto(publis.photo)
                    }
                }
                if(Object.keys(publis.likes).length < secondMostLike){
                    if(Object.keys(publis.likes).length > thirdMostLike){
                        setThirdMostLike(Object.keys(publis.likes).length)
                        setPostThirdMostLike(publis.post)
                        setPostThirdMostLikeName(publis.name)
                        setPostThirdMostLikePhoto(publis.photo)
                    }
                }
            }
        })
    }, [publisList, postMostLike, postSecondMostLike, postThirdMostLike]);

    return (
        <div className={styles.content}>
            <Topbar />
            <Head>
                <title>Planeta {idcom}</title>
            </Head>

            <div className={styles.communityContent}>
                <div className={styles.contentBarTitle}>
                    <div>
                        <h2>Planeta {idcom}</h2>
                    </div>
                    <div className={styles.contentPosts}>
                        <h2>{publisList?.length} postagens</h2>
                    </div>
                </div>
                <div className={styles.divRow}>
                    <div className={styles.row}></div><Image src={astroMyRocket} height={150} width={150} alt="Astro" /><div className={styles.row}></div>
                </div>
                <div className={styles.contentMembersAndAddPost}>
                    <CommunityMembers linkComuList={idcom} showAdmin>
                        <div className={styles.contentMembers}>
                            {profileList?.map((prof) => {
                                if (prof.firstComum == idcom || prof.secondComum == idcom || prof.thirdComum == idcom) {
                                    return(
                                        <div className={styles.contentMembersIntoComum} key={prof.name}>
                                            <Image alt="user image" src={prof?.image} width={30} height={30}/>
                                            <p>{prof.name}</p> 
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </CommunityMembers>
                    <AddPost linkComu={idcom} name={user ? user?.name : "Faça login para fazer parte da comunidade"} />
                    <div className={styles.contentMostsLikes}>
                        <div className={styles.contentTitleMostLikes}>
                            <h2>Assuntos mais relevantes</h2>
                        </div>
                        <div className={styles.contentBar}></div>
                        <div className={styles.contentPostsMostsLikes}>
                            {postMostLike ? (
                                <div className={styles.postsMostsLikes}>
                                <div className={styles.postsMostsLikesImages}>
                                    <Image src={postMostLikePhoto|| astroMyRocket} width={60} height={60}/>
                                </div>
                                <div className={styles.contentInfoPost}>
                                    <h4>{postMostLike}</h4>
                                    <p>{postMostLikeName}</p>
                                </div>
                            </div>
                            ): false}
                            {postSecondMostLike ? (
                                <div className={styles.postsMostsLikes}>
                                <div className={styles.postsMostsLikesImages}>
                                    <Image src={postSecondMostLikePhoto|| astroMyRocket} width={60} height={60}/>
                                </div>
                                <div className={styles.contentInfoPost}>
                                    <h4>{postSecondMostLike}</h4>
                                    <p>{postSecondMostLikeName}</p>
                                </div>
                            </div>
                            ) : false}
                            {postThirdMostLike ? (
                                <div className={styles.postsMostsLikes}>
                                <div className={styles.postsMostsLikesImages}>
                                    <Image src={postThirdMostLikePhoto || astroMyRocket} width={60} height={60}/>
                                </div>
                                <div className={styles.contentInfoPost}>
                                    <h4>{postThirdMostLike}</h4>
                                    <p>{postThirdMostLikeName}</p>
                                </div>
                            </div>
                            ) : false}
                        </div>
                    </div>
                </div>
                <div className={styles.contentBodyPosts}>
                    <ListPublis linkComuList={idcom} />
                </div>
            </div>
 
        </div>
    )
}

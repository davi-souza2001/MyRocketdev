import React, { useEffect, useState } from 'react';
import useAuth from '../data/hook/useAuth';

import firebase from "../firebase/config";

import { IconStar, IconStarLiked } from "../components/Icons";
import PostUser from "./PostUser";

interface ListPublisProps {
    linkComuList: any
}

export default function ListPublis(props: ListPublisProps) {
    const { user } = useAuth();
    const [publisList, setPublisListList] = useState([]);

    // Pega a lista de postagem daquela comunidade. O props.linkComuList vai pegar uma string que vai dizer qual é
    // a comunidade
    useEffect(() => {
        const todoRef = firebase.database().ref(props.linkComuList);
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setPublisListList(todoList);
        })
    }, [user]);

    // A função percorre a api do firebase até achar a página que encontra a postagem e adiciona o email do usuário que
    // deu like na postagem

    async function setlike(id: string) {
        await firebase.database().ref(props.linkComuList).child(`${id}/likes`).push({ authorId: user?.email });
    };

    return (
        <>
        {/* Percorre a lista de postagens e descobre, na lista de likes, se o email é o mesmo do usuário logado */}
        {/* Se for, no botão de like quando clicado ele irá executar a função de deslike e vai mostrar a estrela pintada */}
        {/* Se não for ele retorna o botão de like com a função de like */}
            {publisList?.map(publis => {
                for (let email in publis.likes) {
                    if (publis.likes[email].authorId == user?.email) {
                        return (
                            <PostUser publi={publis.post}
                                name={publis.name}
                                imageUser={publis.photo}
                                trash={user?.email == publis.email ? true : false}
                                likeIcon={user ? true : false}
                                like={() => console.log("Ola")}
                                likesCount={Object.keys(publis.likes).length}
                                delete={() => firebase.database().ref(props.linkComuList).child(publis.id).remove()}
                                key={publis.id}
                            >
                                {IconStarLiked}
                            </PostUser>)
                    }
                }
                /* Na opção trash ele verifica se o email setado na postagem é o mesmo do usuário logado */
                /* se for ele permitirá o usuário deletar o post, caso não, não aparecerá nada */
                return (
                    <PostUser publi={publis.post}
                        name={publis.name}
                        imageUser={publis.photo}
                        trash={user?.email == publis.email ? true : false}
                        likeIcon={user ? true : false}
                        like={() => setlike(publis.id)}
                        likesCount={publis.likes ? Object.keys(publis.likes).length : false}
                        delete={() => firebase.database().ref(props.linkComuList).child(publis.id).remove()}
                        key={publis.id}
                    >
                        {IconStar}
                    </PostUser>
                )
            })}
        </>
    )
}














    // useEffect(() => {
    //     publisList?.map(publis => {
    //         for (let number in publis.likes) {
    //             console.log(publis.likes[number].author);
    //         }
    //     });
    // }, [publisList]);
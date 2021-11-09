import React, { useEffect, useState } from 'react';
import useAuth from '../data/hook/useAuth';

import firebase from "../firebase/config";

import PostUser from "./PostUser";

interface ListPublisProps {
    linkComuList: any
}

export default function ListPublis(props: ListPublisProps) {
    const { user } = useAuth();
    const [publisList, setPublisListList] = useState([]);
    const [permissionLike, setPermissionLike] = useState(true);
    const [conterLikes, setCounterlikes] = useState(0);

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
    }, []);

    useEffect(() => {
        publisList?.map(publis => {
            for (let number in publis.likes) {
                console.log(publis.likes[number].author);
                if (user?.email == publis.likes[number].author) {
                    setPermissionLike(false);
                }
            }
        });
    }, [publisList]);

    function setlike(id: String) {
        if(permissionLike){
            firebase.database().ref(props.linkComuList).child(`${id}/likes`).push({ author: user?.email })
        } else{
            console.log("Não pode")
        }
    }

    return (
        <>
            {publisList?.map(publis => {
                return (
                    <PostUser publi={publis.post}
                        name={publis.name}
                        imageUser={publis.photo}
                        trash={user?.email == publis.email ? true : false}
                        likeIcon={user ? true : false}
                        like={() => setlike(publis.id)}
                        likesCount={conterLikes}
                        delete={() => firebase.database().ref(props.linkComuList).child(publis.id).remove()}
                        key={publis.id} />
                )
            })}
        </>
    )
}

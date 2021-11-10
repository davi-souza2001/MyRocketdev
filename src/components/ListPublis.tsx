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

    async function setlike(id: string) {
       await firebase.database().ref(props.linkComuList).child(`${id}/likes`).push({authorId: user?.email});
    };

    return (
        <>
            {publisList?.map(publis => {
                for (let email in publis.likes) {
                    if (publis.likes[email].authorId == user?.email) {
                        return (
                            <PostUser publi={publis.post}
                                name={publis.name}
                                imageUser={publis.photo}
                                trash={user?.email == publis.email ? true : false}
                                likeIcon={user ? true : false}
                                like={() => firebase.database().ref(`${props.linkComuList}/${publis.id}/likes`).child(user?.uid).remove()}
                                likesCount={Object.keys(publis.likes).length}
                                delete={() => firebase.database().ref(props.linkComuList).child(publis.id).remove()}
                                key={publis.id}
                            >
                                {IconStarLiked}
                            </PostUser>)
                    }
                }
                
                return (
                    <PostUser publi={publis.post}
                        name={publis.name}
                        imageUser={publis.photo}
                        trash={user?.email == publis.email ? true : false}
                        likeIcon={user ? true : false}
                        like={() => setlike(publis.id)}
                        likesCount={publis?.like ? Object.keys(publis?.likes).length : false}
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
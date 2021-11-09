import React, { useEffect, useState } from 'react';
import useAuth from '../data/hook/useAuth';

import firebase from "../firebase/config";

import PostUser from "./PostUser";

interface ListPublisProps {
    linkComuList: any
}

export default function ListPublis(props: ListPublisProps){
    const { user } = useAuth();
    const [publisList, setPublisListList] = useState([]);

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

    return (
        <>
            {publisList?.map(publis => {
                return (
                    <PostUser publi={publis.post} 
                    name={publis.name} 
                    imageUser={publis.photo} 
                    trash={user?.email == publis.email ? true : false} 
                    like={() => firebase.database().ref(props.linkComuList).child(`${publis.id}/likes`).push(user?.name)}
                    delete={() => firebase.database().ref(props.linkComuList).child(publis.id).remove()}
                    key={publis.id}/>
                )
            })}
        </>
    )
}

import React, { useEffect, useState } from 'react';

import firebase from "../firebase/config";


import PostUser from "./PostUser";

interface ListPublisProps {
    linkComuList: any
}

export default function ListPublis(props: ListPublisProps){
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

      function renderList(){
        return publisList?.map((publi, index) => {
          if(publi){
          return(
                <PostUser publi={publi.post}/>
          )}
        })
      }



    return (
        <>
            {renderList()}
        </>
    )
}

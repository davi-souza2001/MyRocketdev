import React from 'react';


interface TestProps {
    children: any;
}

export default function ContentMainProfile(props: TestProps ){
    //Apenas para alguns components aceitarem childrens para renderizar
    return (
        <div >
            {props.children}
        </div>
    )
}

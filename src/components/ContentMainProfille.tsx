import React from 'react';


interface TestProps {
    children: any;
}

export default function ContentMainProfile(props: TestProps ){
    return (
        <div >
            {props.children}
        </div>
    )
}

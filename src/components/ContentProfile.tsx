import React from 'react';

import style from "../styles/ContentProfile.module.css";

interface TestProps {
    children: any;
}

export default function Test(props: TestProps ){
    return (
        <div className={style.contentProfiles}>
            {props.children}
        </div>
    )
}

import Head from "next/head";

import Topbar from "../components/Topbar";

interface meetings {
    
}

export default function meetings(props: meetings){
    return (
        <>
            <Topbar/>
            <Head>
                <title>Reuniões</title>
            </Head>
            <h1 style={{color: "#fff"}}>Em breve</h1>
        </>
    )
}

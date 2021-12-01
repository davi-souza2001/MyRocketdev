import Head from "next/head";
import Image from "next/image";
import working from "../assets/img/workingAstronaut.svg";
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
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <h1 style={{color: "#fff", marginTop: "30px", marginBottom: "50px"}}>Em breve</h1>
                <Image src={working} height={200} width={400} alt="Astro" />
            </div>
        </>
    )
}

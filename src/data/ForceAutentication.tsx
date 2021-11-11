import Image from "next/image";
import route from "next/router";
import { useState } from "react";
import astro from "../assets/img/austrohero.jpg";
import useAuth from "./hook/useAuth";
import useProfile from "./hook/useProfile";

export default function ForceAutentication(props) {

    const { user } = useAuth();
    const { profileList } = useProfile();

    const [checkProfile, setCheckProfile] = useState(true);

    const checkIfExistsProfile = profileList?.map(async (prof) =>{
        const emails = await prof.email
        console.log(emails)
    })

    function renderContent(){
        return(
            <>
                {props.children}
            </>
        )
    }

    function renderLoading(){
        return(
            <div>
                <Image src={astro}/>
            </div>
        )
    }

    if(checkProfile) {
        return renderContent()
    } else {
        return renderLoading()
    }
}
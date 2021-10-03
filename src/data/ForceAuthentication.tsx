import styles from "../styles/ForceAuthentication.module.css";
import Image from "next/image";
import load from "../assets/img/GifLoading.gif";
import useAuth from "./hook/useAuth";

export default function ForceAuthentication(props) {

    const { user, loading } = useAuth();

    function renderContent() {
        return (
        <>
            {props.children}
        </>
        )
    }


    function renderLoading() {
        return(
            <div className={styles.load}>
                <Image src={load} />
            </div>
        )
    }

    if(!loading && user?.email){
        return renderContent()
    } else if(loading) {
        return renderLoading()
    } else {
        return null
    }
}
import styles from "../styles/MainContent.module.css";
import Profile from "./Profile";

interface MainContentProps {
    
}

export default function MainContent(Props: MainContentProps){
    return (
        <div className={styles.contentProfiles}>
            <Profile name="Davi" dev="Full-stack" description="Ola sou front e back"/>
        </div>
    )
}
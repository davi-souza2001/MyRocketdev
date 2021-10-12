import Topbar from "../components/Topbar";

import styles from "../styles/Main.module.css";

interface MainProps {
    
}

export default function Main(props: MainProps){
    return (
        <div>
            <Topbar/>
            <div className={styles.contentCommunity}>
                <h2>Comunidades</h2>
            </div>
            <div className={styles.contentCommunityOptions}>
                <div className={styles.contentOption}>
                    <h2>Front-End</h2>
                    <h4>Aqui você pode ficar por dentro do que nossos astronautas estão discutindo sobre fron-end</h4>
                </div>
                <div className={styles.contentOption}>
                    <h2>Back-End</h2>
                    <h4>Aqui você pode ficar por dentro do que nossos astronautas estão discutindo sobre fron-end</h4>
                </div>
                <div className={styles.contentOption}>
                    <h2>Mobile</h2>
                    <h4>Aqui você pode ficar por dentro do que nossos astronautas estão discutindo sobre fron-end</h4>
                </div>
            </div>
        </div>
    )
}
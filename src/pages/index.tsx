import Topbar from "../components/Topbar";

import styles from "../styles/Main.module.css";

interface MainProps {
    
}

export default function Main(props: MainProps){
    return (
        <div>
            <Topbar/>
            <div className={styles.contentCommunity}>
                <h1>Comunidades</h1>
            </div>
            <div className={styles.contentCommunityOptions}>
                <h2>Front-End</h2>
                    <div className={styles.frameworks}>
                        <div className={styles.contentOption}>
                            <h3>Reactjs</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Nextjs</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Angular</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Vue</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Ember</h3>
                        </div>
                    </div>
                <h2>Back-End</h2>
                    <div className={styles.frameworks}>
                        <div className={styles.contentOption}>
                            <h3>Sql/MySql</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>MongoDb</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Python</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Firebase</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Java</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>C#</h3>
                        </div>
                    </div>
                <h2>Mobile</h2>
                    <div className={styles.frameworks}>
                        <div className={styles.contentOption}>
                            <h3>React-Native</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Flutter</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Ionic</h3>
                        </div>
                        <div className={styles.contentOption}>
                            <h3>Swift</h3>
                        </div>
                    </div>
            </div>
        </div>
    )
}
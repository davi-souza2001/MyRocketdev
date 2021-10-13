import Topbar from "../components/Topbar";
import Image from "next/image";

import styles from "../styles/Main.module.css";

// Icons catched in "https://simpleicons.org/"

/* front-end svg's */
import reactImg from "../assets/img/front/react.svg";
import angularImg from "../assets/img/front/angularjs.svg";
import vueImg from "../assets/img/front/vuedotjs.svg";
import nextImg from "../assets/img/front/nextdotjs.svg";
import emberImg from "../assets/img/front/emberdotjs.svg";

/* back-end svg's */
import nodeImg from "../assets/img/back/nodedotjs.svg";
import mongoImg from "../assets/img/back/mongodb.svg";
import sqlImg from "../assets/img/back/mysql.svg";
import firebaseImg from "../assets/img/back/firebase.svg";
import csharpImg from "../assets/img/back/csharp.svg";
import javaImg from "../assets/img/back/java.svg";

/* mobile svg's */
import flutterImg from "../assets/img/mobile/flutter.svg";
import ionicImg from "../assets/img/mobile/ionic.svg";
import swiftImg from "../assets/img/mobile/swift.svg";

export default function Main() {
    return (
        <div>
            <Topbar />
            <div className={styles.contentCommunity}>
                <h1>Comunidades</h1>
            </div>
            <div className={styles.contentCommunityOptions}>
                <h2>Front-End</h2>
                <div className={styles.frameworks}>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={reactImg} height={100} width={200}/>
                        </div>
                        <div className={styles.framework}>
                            <h3>ReactJS</h3>
                            <h5>Front-End</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={angularImg} height={100} width={200}/>
                        </div>
                        <div className={styles.framework}>
                            <h3>Angular</h3>
                            <h5>Front-End</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={vueImg} height={100} width={200}/> 
                        </div>
                        <div className={styles.framework}>
                            <h3>Vue</h3>
                            <h5>Front-End</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={nextImg} height={100} width={200}/> 
                        </div>
                        <div className={styles.framework}>
                            <h3>Next</h3>
                            <h5>Front-End</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={emberImg} height={100} width={200}/> 
                        </div>
                        <div className={styles.framework}>
                            <h3>Ember</h3>
                            <h5>Front-End</h5>
                        </div>
                    </div>
                </div>
                <h2>Back-End</h2>
                <div className={styles.frameworks}>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={nodeImg} height={100} width={200}/> 
                        </div>
                        <div className={styles.framework}>
                            <h3>NodeJS</h3>
                            <h5>Back-End</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={mongoImg} height={100} width={200}/> 
                        </div>
                        <div className={styles.framework}>
                            <h3>Mongo</h3>
                            <h5>Back-End</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={sqlImg} height={100} width={200}/> 
                        </div>
                        <div className={styles.framework}>
                            <h3>SQL/MySQL</h3>
                            <h5>Back-End</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={firebaseImg} height={100} width={200}/> 
                        </div>
                        <div className={styles.framework}>
                            <h3>Firebase</h3>
                            <h5>Back-End</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={csharpImg} height={100} width={200}/> 
                        </div>
                        <div className={styles.framework}>
                            <h3>C#</h3>
                            <h5>Back-End</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={javaImg} height={100} width={200}/> 
                        </div>
                        <div className={styles.framework}>
                            <h3>Java</h3>
                            <h5>Back-End</h5>
                        </div>
                    </div>
                </div>
                <h2>Mobile</h2>
                <div className={styles.frameworks}>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={reactImg} height={100} width={200}/>
                        </div>
                        <div className={styles.framework}>
                            <h3>ReactJS</h3>
                            <h5>Mobile</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={flutterImg} height={100} width={200}/>
                        </div>
                        <div className={styles.framework}>
                            <h3>Flutter</h3>
                            <h5>Mobile</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={swiftImg} height={100} width={200}/>
                        </div>
                        <div className={styles.framework}>
                            <h3>Swift</h3>
                            <h5>Mobile</h5>
                        </div>
                    </div>
                    <div className={styles.contentOption}>
                        <div>
                            <Image src={ionicImg} height={100} width={200}/>
                        </div>
                        <div className={styles.framework}>
                            <h3>Ionic</h3>
                            <h5>Mobile</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
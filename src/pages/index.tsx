import route from "next/router";
import Image from "next/image";
import { useState } from "react";
import SeniorOptions from "../components/SeniorOptions";

import Topbar from "../components/Topbar";
import styles from "../styles/galaxy.module.css";

import reactImg from "../assets/img/front/react.svg";
import angularImg from "../assets/img/front/angularjs.svg";
import vueImg from "../assets/img/front/vuedotjs.svg";
import nextImg from "../assets/img/front/nextdotjs.svg";
import emberImg from "../assets/img/front/emberdotjs.svg";

import nodeImg from "../assets/img/back/nodedotjs.svg";
import mongoImg from "../assets/img/back/mongodb.svg";
import sqlImg from "../assets/img/back/mysql.svg";
import firebaseImg from "../assets/img/back/firebase.svg";
import csharpImg from "../assets/img/back/csharp.svg";
import javaImg from "../assets/img/back/java.svg";

import flutterImg from "../assets/img/mobile/flutter.svg";
import ionicImg from "../assets/img/mobile/ionic.svg";
import swiftImg from "../assets/img/mobile/swift.svg";


interface galaxy {

}

export default function Galaxy(props: galaxy){
    const [modal, setModal] = useState(true);
    const [front, setFront] = useState(false);
    const [back, setBack] = useState(false);
    const [mobile, setMobile] = useState(false);

    function frontModal(){
        setModal(false);
        setFront(true);
    }

    function backModal(){
        setModal(false);
        setBack(true);
    }

    function mobileModal(){
        setModal(false);
        setMobile(true);
    } 

    return (
    <>
        <Topbar/>
        {modal ? (
        <div className={styles.optionsGeral}>
            <div className={styles.stars}/>
        
            <div className={styles.galaxy}>
                <h1>Front-End</h1>
                <SeniorOptions click={() => frontModal()}/>
            </div>

            <div className={styles.galaxy}>
                <h1>Back-End</h1>
                <SeniorOptions click={() => backModal()}/>
            </div>

            <div className={styles.galaxy}>
                <h1>Mobile</h1>
                <SeniorOptions click={() => mobileModal()}/>                    
            </div>
        </div>
        ) : false}

        {front ? (
            <div className={styles.geralContentGlobal}>
                <div className={styles.stars}/>

                <div className={styles.geralContentLeft}>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/React")}>
                        <h2>React</h2>
                        <Image src={reactImg}/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Angular")}>
                        <h2>Angular</h2>
                        <Image src={angularImg}/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Vue")}>
                        <h2>Vue</h2>
                        <Image src={vueImg}/>
                    </div>
                </div>
                    <div className={styles.geral}>
                        <div className={styles.sun}></div>

                        <div className={styles.mercuryOutline}>
                            <div className={styles.mercury}>
                                <p>React</p>
                            </div>
                        </div>

                        <div className={styles.venusOutline}>
                            <div className={styles.venus}>
                                <p>Angular</p>
                            </div>
                        </div>

                        <div className={styles.earthOutline}>
                            <div className={styles.earth}>
                                <p>Vue</p>
                            </div>
                        </div>

                        <div className={styles.marsOutline}>
                            <div className={styles.mars}>
                                <p>Next</p>
                            </div>
                        </div>

                        <div className={styles.jupiterOutline}>
                            <div className={styles.jupiter}>
                                <p>Ember</p>
                            </div>
                        </div>
                    
                    </div>
                    <div className={styles.geralContentRight}>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/Next")}>
                            <h2>Next</h2>
                            <Image src={nextImg}/>
                        </div>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/Ember")}>
                            <h2>Ember</h2>
                            <Image src={emberImg}/>
                        </div>
                </div>
            </div>
        ): false} 

        {back ? (
            <div className={styles.geralContentGlobal}>
                <div className={styles.stars}></div>

                <div className={styles.geralContentLeft}>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Node")}>
                        <h2>Node</h2>
                        <Image src={nodeImg}/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Mongo")}>
                        <h2>Mongo</h2>
                        <Image src={mongoImg}/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Sql")}>
                        <h2>Sql</h2>
                        <Image src={sqlImg}/>
                    </div>
                </div>
                <div className={styles.geral}>
                <div className={styles.sun}></div>

                <div className={styles.mercuryOutline}>
                    <div className={styles.mercury} style={{backgroundColor: "#339933"}}>
                        <p>Node</p>
                    </div>
                </div>

                <div className={styles.venusOutline}>
                    <div className={styles.venus} style={{backgroundColor: "#47A248"}}>
                        <p>Mongo</p>
                    </div>
                </div>

                <div className={styles.earthOutline}>
                    <div className={styles.earth} style={{backgroundColor: "#4479A1"}}>
                        <p>Sql/MySql</p>
                    </div>
                </div>

                <div className={styles.marsOutline}>
                    <div className={styles.mars} style={{backgroundColor: "#FFCA28"}}>
                        <p>Firebase</p>
                    </div>
                </div>

                <div className={styles.jupiterOutline}>
                    <div className={styles.jupiter} style={{backgroundColor: "#239120"}}>
                        <p>C#</p>
                    </div>
                </div>

                <div className={styles.saturnOutline}>
                    <div className={styles.saturn} style={{backgroundColor: "#007396"}}>
                        <p>Java</p>
                    </div>
                </div>

                <div className={styles.geralContentRight}>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/Firebase")}>
                            <h2>Firebase</h2>
                            <Image src={firebaseImg}/>
                        </div>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/CSharp")}>
                            <h2>C#</h2>
                            <Image src={csharpImg}/>
                        </div>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/Java")}>
                            <h2>Java</h2>
                            <Image src={javaImg}/>
                        </div>
                </div>
            
            </div>
        </div>
        ): false} 

        {mobile ? (
            <div className={styles.geralContentGlobal}>
                <div className={styles.stars}></div>
                
                <div className={styles.geralContentLeft}>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Flutter")}>
                        <h2>Flutter</h2>
                        <Image src={flutterImg}/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Ionic")}>
                        <h2>Ionic</h2>
                        <Image src={ionicImg}/>
                    </div>
                </div>
            <div className={styles.geral}>
                <div className={styles.sun}></div>

                <div className={styles.mercuryOutline}>
                    <div className={styles.mercury} style={{backgroundColor: "#3880FF"}}>
                        <p>Ionic</p>
                    </div>
                </div>

                <div className={styles.venusOutline}>
                    <div className={styles.venus} style={{backgroundColor: "#02569B"}}>
                        <p>Flutter</p>
                    </div>
                </div>

                <div className={styles.earthOutline}>
                    <div className={styles.earth} style={{backgroundColor: "#FA7343"}}>
                        <p>Swift</p>
                    </div>
                </div>

                <div className={styles.marsOutline}>
                    <div className={styles.mars} style={{backgroundColor: "#61DAFB"}}>
                        <p>React-Native</p>
                    </div>
                </div>
            
                <div className={styles.geralContentRight}>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/React-Native")}>
                            <h4>React-Native</h4>
                            <Image src={reactImg}/>
                        </div>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/Swift")}>
                            <h2>Swift</h2>
                            <Image src={swiftImg}/>
                        </div>
                </div>
            </div>
        </div>
        ): false}   
    </>
    )
}
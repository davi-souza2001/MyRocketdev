import route from "next/router";
import Image from "next/image";
import { useState } from "react";
import SeniorOptions from "../components/SeniorOptions";

import Topbar from "../components/Topbar";

import styles from "../styles/galaxy.module.css";
import stars from "../styles/Starsnew.module.scss";

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


export default function Galaxy(){

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

    function planetGlow(pId){
        document.getElementById(pId).style.boxShadow = "0px 0px 20px 10px #fff";
        document.getElementById(pId).style.transition = "0.2s";
    }

    function planetUnglow(pId){
        document.getElementById(pId).style.boxShadow = "0px 0px 0px ";
        document.getElementById(pId).style.transition = "0.2s";
    }

    return (
    <>
        <Topbar/>
        {modal ? (
        <div className={styles.optionsGeral}>
            {/* <div className={styles.stars} /> */}
                    
            <div className={stars.starsWrapper}>
                <div className={stars.stars}></div>
            </div>

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
                {/* <div className={styles.stars} /> */}
                <div className={stars.starsWrapper}>
                    <div className={stars.stars}></div>
                </div>

                <div className={styles.geralContentLeft}>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/React")} onMouseOver={() => planetGlow("pReact")} onMouseOut={() => planetUnglow("pReact")}>
                        <h2 className={styles.react}>React</h2>
                        <Image src={reactImg} alt="logo"/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Angular")} onMouseOver={() => planetGlow("pAngular")} onMouseOut={() => planetUnglow("pAngular")}>
                        <h2 className={styles.angular}>Angular</h2>
                        <Image src={angularImg} alt="logo"/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Vue")} onMouseOver={() => planetGlow("pVue")} onMouseOut={() => planetUnglow("pVue")}>
                        <h2 className={styles.vue}>Vue</h2>
                        <Image src={vueImg} alt="logo"/>
                    </div>
                </div>
                <div className={styles.geral}>
                    <div className={styles.sun}></div>

                    <div className={styles.mercuryOutline}>
                        <div id="pReact" className={styles.mercury}>
                            <Image src={reactImg} alt="logo"/>
                        </div>
                    </div>

                    <div className={styles.venusOutline}>
                        <div id="pAngular" className={styles.venus}>
                            <Image src={angularImg} alt="logo"/>
                        </div>
                    </div>

                    <div className={styles.earthOutline}>
                        <div id="pVue" className={styles.earth}>
                            <Image src={vueImg} alt="logo"/>
                        </div>
                    </div>

                    <div className={styles.marsOutline}>
                        <div id="pNext" className={styles.mars}>
                            <Image src={nextImg} width={18} alt="logo"/>
                        </div>
                    </div>

                    <div className={styles.jupiterOutline}>
                        <div id="pEmber" className={styles.jupiter}>
                            <Image src={emberImg} width={18} alt="logo"/>
                        </div>
                    </div>
                
                </div>
                <div className={styles.geralContentRight}>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Next")} onMouseOver={() => planetGlow("pNext")} onMouseOut={() => planetUnglow("pNext")}>
                        <h2 className={styles.next}>Next</h2>
                        <Image src={nextImg} alt="logo"/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Ember")} onMouseOver={() => planetGlow("pEmber")} onMouseOut={() => planetUnglow("pEmber")}>
                        <h2 className={styles.ember}>Ember</h2>
                        <Image src={emberImg} alt="logo"/>
                    </div>
                </div>
            </div>
        ): false} 

        {back ? (
            <div className={styles.geralContentGlobal}>
                {/* <div className={styles.stars}></div> */}

                <div className={stars.starsWrapper}>
                    <div className={stars.stars}></div>
                </div>

                <div className={styles.geralContentLeft}>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Node")} onMouseOver={() => planetGlow("pNode")} onMouseOut={() => planetUnglow("pNode")}>
                        <h2 className={styles.node}>Node</h2>
                        <Image src={nodeImg} alt="logo"/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Mongo")} onMouseOver={() => planetGlow("pMongo")} onMouseOut={() => planetUnglow("pMongo")}>
                        <h2 className={styles.mongo}>Mongo</h2>
                        <Image src={mongoImg} alt="logo"/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Sql")} onMouseOver={() => planetGlow("pSql")} onMouseOut={() => planetUnglow("pSql")}>
                        <h2 className={styles.sql}>Sql</h2>
                        <Image src={sqlImg} alt="logo"/>
                    </div>
                </div>
                <div className={styles.geral}>
                <div className={styles.sun}></div>

                <div className={styles.mercuryOutline}>
                    <div id="pNode" className={styles.mercury} style={{backgroundColor: "#339933"}}>
                        <Image src={nodeImg} alt="logo"/>
                    </div>
                </div>

                <div className={styles.venusOutline}>
                    <div id="pMongo" className={styles.venus} style={{backgroundColor: "#47A248"}}>
                        <Image src={mongoImg} alt="logo"/>
                    </div>
                </div>

                <div className={styles.earthOutline}>
                    <div id="pSql" className={styles.earth} style={{backgroundColor: "#4479A1"}}>
                        <Image src={sqlImg} alt="logo"/>
                    </div>
                </div>

                <div className={styles.marsOutline}>
                    <div id="pFirebase" className={styles.mars} style={{backgroundColor: "#FFCA28"}}>
                        <Image src={firebaseImg} alt="logo"/>
                    </div>
                </div>

                <div className={styles.jupiterOutline}>
                    <div id="pCsharp" className={styles.jupiter} style={{backgroundColor: "#239120"}}>
                        <Image src={csharpImg} width={18} alt="logo"/>
                    </div>
                </div>

                <div className={styles.saturnOutline}>
                    <div id="pJava" className={styles.saturn} style={{backgroundColor: "#007396"}}>
                        <Image src={javaImg} alt="logo"/>
                    </div>
                </div>

                <div className={styles.geralContentRight}>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/Firebase")} onMouseOver={() => planetGlow("pFirebase")} onMouseOut={() => planetUnglow("pFirebase")}>
                            <h2 className={styles.firebase}>Firebase</h2>
                            <Image src={firebaseImg} alt="logo"/>
                        </div>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/CSharp")} onMouseOver={() => planetGlow("pCsharp")} onMouseOut={() => planetUnglow("pCsharp")}>
                            <h2 className={styles.csharp}>C#</h2>
                            <Image src={csharpImg} alt="logo"/>
                        </div>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/Java")} onMouseOver={() => planetGlow("pJava")} onMouseOut={() => planetUnglow("pJava")}>
                            <h2 className={styles.java}>Java</h2>
                            <Image src={javaImg} alt="logo"/>
                        </div>
                </div>
            
            </div>
        </div>
        ): false} 

        {mobile ? (
            <div className={styles.geralContentGlobal}>
                {/* <div className={styles.stars}></div> */}

                <div className={stars.starsWrapper}>
                    <div className={stars.stars}></div>
                </div>
                
                <div className={styles.geralContentLeft}>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Flutter")} onMouseOver={() => planetGlow("pFlutter")} onMouseOut={() => planetUnglow("pFlutter")}>
                        <h2 className={styles.flutter}>Flutter</h2>
                        <Image src={flutterImg} alt="logo"/>
                    </div>
                    <div className={styles.contentTecSingle} onClick={() => route.push("/com/Ionic")} onMouseOver={() => planetGlow("pIonic")} onMouseOut={() => planetUnglow("pIonic")}>
                        <h2 className={styles.ionic}>Ionic</h2>
                        <Image src={ionicImg} alt="logo"/>
                    </div>
                </div>
            <div className={styles.geral}>
                <div className={styles.sun}></div>

                <div className={styles.mercuryOutline}>
                    <div id="pIonic" className={styles.mercury} style={{backgroundColor: "#3880FF"}}>
                        <Image src={ionicImg} alt="logo"/>
                    </div>
                </div>

                <div className={styles.venusOutline}>
                    <div id="pFlutter" className={styles.venus} style={{backgroundColor: "#02569B"}}>
                        <Image src={flutterImg} alt="logo"/>
                    </div>
                </div>

                <div className={styles.earthOutline}>
                    <div id="pSwift" className={styles.earth} style={{backgroundColor: "#FA7343"}}>
                        <Image src={swiftImg} alt="logo"/>
                    </div>
                </div>

                <div className={styles.marsOutline}>
                    <div id="pReactN" className={styles.mars} style={{backgroundColor: "#61DAFB"}}>
                        <Image src={reactImg} alt="logo"/>
                    </div>
                </div>
            
                <div className={styles.geralContentRight}>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/React-Native")} onMouseOver={() => planetGlow("pReactN")} onMouseOut={() => planetUnglow("pReactN")}>
                            <h3 className={styles.react}>React-Native</h3>
                            <Image src={reactImg} alt="logo"/>
                        </div>
                        <div className={styles.contentTecSingle} onClick={() => route.push("/com/Swift")} onMouseOver={() => planetGlow("pSwift")} onMouseOut={() => planetUnglow("pSwift")}>
                            <h2 className={styles.swift}>Swift</h2>
                            <Image src={swiftImg} alt="logo"/>
                        </div>
                </div>
            </div>
        </div>
        ): false}   
    </>
    )
}
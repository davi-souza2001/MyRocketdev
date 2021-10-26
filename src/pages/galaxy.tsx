import route from "next/router";
import { useState } from "react";
import SeniorOptions from "../components/SeniorOptions";

import Topbar from "../components/Topbar";
import styles from "../styles/galaxy.module.css";

interface galaxy {

}

export default function galaxy(props: galaxy){
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
            <SeniorOptions senior="Front-End" click={() => frontModal()}/>
            <SeniorOptions senior="Back-End" click={() => backModal()}/>
            <SeniorOptions senior="Mobile" click={() => mobileModal()}/>
        </div>
        ) : false}

        {front ? (
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
        ): false} 

        {back ? (
            <div className={styles.geral}>
            <div className={styles.sun}></div>

            <div className={styles.mercuryOutline}>
                <div className={styles.mercury}>
                    <p>Node</p>
                </div>
            </div>

            <div className={styles.venusOutline}>
                <div className={styles.venus}>
                    <p>Mongo</p>
                </div>
            </div>

            <div className={styles.earthOutline}>
                <div className={styles.earth}>
                    <p>Sql/MySql</p>
                </div>
            </div>

            <div className={styles.marsOutline}>
                <div className={styles.mars}>
                    <p>Firebase</p>
                </div>
            </div>

            <div className={styles.jupiterOutline}>
                <div className={styles.jupiter}>
                    <p>C#</p>
                </div>
            </div>

            <div className={styles.saturnOutline}>
                <div className={styles.saturn}>
                    <p>Java</p>
                </div>
            </div>
            
        </div>
        ): false} 

        {mobile ? (
            <div className={styles.geral}>
            <div className={styles.sun}></div>

            <div className={styles.mercuryOutline}>
                <div className={styles.mercury}>
                    <p>Ionic</p>
                </div>
            </div>

            <div className={styles.venusOutline}>
                <div className={styles.venus}>
                    <p>Flutter</p>
                </div>
            </div>

            <div className={styles.earthOutline}>
                <div className={styles.earth}>
                    <p>Swift</p>
                </div>
            </div>

            <div className={styles.marsOutline}>
                <div className={styles.mars}>
                    <p>React-Native</p>
                </div>
            </div>
            
        </div>
        ): false}   
    </>
    )
}


{/* <div className={styles.geral}>
            <div className={styles.sun}></div>

            <div className={styles.mercuryOutline}>
                <div className={styles.mercury}>
                    <p>Mercury</p>
                </div>
            </div>

            <div className={styles.venusOutline}>
                <div className={styles.venus}>
                    <p>Venus</p>
                </div>
            </div>

            <div className={styles.earthOutline}>
                <div className={styles.earth}>
                    <p>Earth</p>
                </div>
            </div>

            <div className={styles.marsOutline}>
                <div className={styles.mars}>
                    <p>Mars</p>
                </div>
            </div>

            <div className={styles.jupiterOutline}>
                <div className={styles.jupiter}>
                    <p>Jupiter</p>
                </div>
            </div>

            <div className={styles.saturnOutline}>
                <div className={styles.saturn}>
                    <p>Saturn</p>
                </div>
            </div>
            
        </div> */}
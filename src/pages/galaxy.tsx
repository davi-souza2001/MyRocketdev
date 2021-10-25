import styles from "../styles/galaxy.module.css";

interface galaxy {

}

export default function galaxy(props: galaxy){
    return (
    <div className={styles.geral}>
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
        
    </div>
    )
}

import styles from "../styles/SeniorOptions.module.css"

interface SeniorOptions {
    click: any;
}

export default function SeniorOptions(props: SeniorOptions){
    return (
        <div className={styles.contentGeral} onClick={props.click}></div>
    )
}

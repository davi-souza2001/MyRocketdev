import styles from "../styles/SeniorOptions.module.css"

interface SeniorOptions {
    senior: String;
    click: any;
}

export default function SeniorOptions(props: SeniorOptions){
    return (
        <div className={styles.contentGeral} onClick={props.click}>
            <h1>{props.senior}</h1>
        </div>
    )
}

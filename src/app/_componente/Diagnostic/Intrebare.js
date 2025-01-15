import styles from "@/app/_styles/fereastra_diagnostic.module.css"

export default function Intrebare({id, intrebare}){

    return (
        <div className={styles.question_container}>
            <label htmlFor={id}>[{id+1}]: {intrebare}</label><br/>
            <textarea id={id} required></textarea>
            <br/>
        </div>
    );

}
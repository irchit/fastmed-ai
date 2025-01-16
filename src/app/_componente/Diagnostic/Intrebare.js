import styles from "@/app/_styles/fereastra_diagnostic.module.css"

export default function Intrebare({id, intrebare, handle_change}){

    return (
        <div className={styles.question_container}>
            <label htmlFor={id}>[{id+1}]: {intrebare}</label><br/>
            <textarea 
                id={`question_${id}`} 
                name={`question_${id}`}
                onChange={handle_change} 
                required
            ></textarea>
            <br/>
        </div>
    );

}
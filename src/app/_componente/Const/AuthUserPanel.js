import styles from "@/app/_styles/auth.module.css"

export default function AuthUserPanel(){
    var is_logged = false;
    return(
        <div className={styles.main_container}>
            <p>{is_logged ? "0A000001" : "Autentificare"}</p>
            <img src="/user.png"/>
        </div>
    ); 
}
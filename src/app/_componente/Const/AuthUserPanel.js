import styles from "@/app/_styles/auth.module.css"
import { getSession } from "@/app/login/userManager";



export default async function AuthUserPanel(){


    const session = await getSession();

    var nume = "";
    var username = "";

    if (session){
        nume = session.foundUser.nume + " " + session.foundUser.prenume;
        username = session.foundUser.nume_utilizator;
    }

    
    return(
        <a href="./login">
            <div className={styles.main_container}>
                <p>{session ? `${nume} | ${username}` : "Autentificare"}</p>
                <img src="/user.png"/>
            </div>
        </a>
    ); 
}
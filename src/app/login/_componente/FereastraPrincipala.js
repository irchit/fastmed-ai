import styles from "@/app/login/_styles/fereastra_principala.module.css"
import { getSession, login, logout, register } from "../userManager";
import { redirect } from "next/navigation";
import Istoric from "./Istoric";


export default async function FereastraPrincipala(){

    const session = await getSession();

    if (session){
        return (
            <div className={styles.main_container}>
                <div className={styles.header}>
                    <a href="../">
                        <div className={styles.home}>
                            <img src="/logo.png"/>
                        </div>
                    </a>
                    <h1>FastMed.AI</h1>
                </div>
                <form
                    action={async () => {
                        "use server";
                        await logout();
                        redirect("/");
                    }}
                >
                    <button className={styles.back}>Log Out</button>
                </form>
                <h3>Istoric Prompt-uri</h3>
                <Istoric
                    session={session}
                />
            </div>
        );
    }
    return (
        <div className={styles.main_container}>
            <div className={styles.header}>
                <a href="../">
                    <div className={styles.home}>
                        <img src="/logo.png"/>
                    </div>
                </a>
                <h1>FastMed.AI</h1>
            </div>
            <div className={styles.login}>
                <h3>Autentificare</h3>
                <form
                    action={async (formData) => {
                        "use server";
                        var response = await login(formData);
                        console.log(response);
                        if (response === "loggedin")
                            redirect("/login");
                      }}
                >
                    <div>
                        <label>Nume utilizator: </label><input id="username" name="username" type="text"/>
                    </div>
                    <div>
                        <label>Parola: </label><input id="password" name="password" type="password"/>
                    </div>
                    <button className={styles.submit} type="submit">Autentificare</button>
                </form>
            </div>
            <div className={styles.register}>
                <h3>Înregistrare</h3>
                <form
                    action={async (formData) => {
                        "use server";
                        var response = await register(formData);
                        if(response === "loggedin")
                            redirect("/login");
                    }}
                >
                    <div>
                        <label>Nume: </label><input  id="nume" name="nume" type="text"/>
                    </div>
                    <div>
                        <label>Prenume: </label><input  id="prenume" name="prenume" type="text"/>
                    </div>
                    <div>
                        <label>Nume utilizator: </label><input  id="username_register" name="username" type="text"/>
                    </div>
                    <div>
                        <label>Parola: </label><input id="password_register" name="password"  type="password"/>
                    </div>
                    <div className={styles.radio_gender}>
                        <label>Gen: </label>
                        <input type="radio" id="m" name="gen" value="m"/>
                        <label htmlFor="m">Barbat</label>
                        <input type="radio" id="f" name="gen" value="f"/>
                        <label htmlFor="f">Femeie</label>
                    </div>
                    <input className={styles.submit} type="submit" value="Înregistrare"/>
                </form>
            </div>
        </div>
    );
}
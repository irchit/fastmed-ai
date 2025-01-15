import styles from "@/app/login/_styles/fereastra_principala.module.css"

export default function FereastraPrincipala(){
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
                <form>
                    <div>
                        <label>Nume utilizator: </label><input type="text"/>
                    </div>
                    <div>
                        <label>Parola: </label><input type="password"/>
                    </div>
                    <input className={styles.submit} type="submit" value="Autentificare"/>
                </form>
            </div>
            <div className={styles.register}>
                <h3>Înregistrare</h3>
                <form>
                    <div>
                        <label>Nume: </label><input type="text"/>
                    </div>
                    <div>
                        <label>Prenume: </label><input type="text"/>
                    </div>
                    <div>
                        <label>Nume utilizator: </label><input type="text"/>
                    </div>
                    <div>
                        <label>Parola: </label><input type="password"/>
                    </div>
                    <div className={styles.radio_gender}>
                        <label>Gen: </label>
                        <input type="radio" id="m" name="sex" value="m"/>
                        <label htmlFor="m">Barbat</label>
                        <input type="radio" id="f" name="sex" value="f"/>
                        <label htmlFor="f">Femeie</label>
                    </div>
                    <input className={styles.submit} type="submit" value="Înregistrare"/>
                </form>
            </div>
        </div>
    );
}
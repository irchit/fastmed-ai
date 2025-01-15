"use client"

import styles from "@/app/_styles/fereastra_diagnostic.module.css"
import Intrebare from "./Intrebare";

export default function FereastraDiagnostic({id}) {
        
    const questions = [    
        "Cât de des ai dureri de cap?",
        "Ai dificultăți în respirație?",
        "Cum te simți în legătură cu starea ta emoțională?",
        "Ai avut probleme digestive recente?",
        "Cum ți-e vederea?",
        "Cât de des faci sport?",
        "Ai avut vreo accidentare recentă?",
        "Cum te simți după mese?",
        "Ai probleme de somn?",
        "Cum ți se pare tensiunea arterială?"
    ]

    const hideId = id;
    const navId = "main";

    const handleClick = () => {
        const element = document.getElementById(hideId);
        if (element) {
            element.style.top = "-50%";
        } else {
          console.error(`Element with id "${hideId}" not found.`);
        }
        const new_element = document.getElementById(navId);
        if (new_element){
            new_element.style.top = "50%";
          } else {
            console.error(`Element with id "${navId}" not found.`);
          }
      };

    return (
        <div id={id} className={styles.main_container}>
            <h1>
                Formular pentru Diagnostic
            </h1>
            <div onClick={handleClick} className={styles.back}>
                Acasă
            </div>
            <div className={styles.formular}>
                <p>Acest formular nu va fi salvat deoarece nu sunteti conectat.</p>
                <form>
                    {
                        questions.map((q, index) => {
                            return (
                                <Intrebare
                                key = {index}
                                id = {index}
                                intrebare = {q}
                                />
                            );
                        })
                    }
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}
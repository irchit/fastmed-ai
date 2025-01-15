'use client'

import styles from "@/app/_styles/fereastra_despre_ai.module.css"

export default function FereastraDespreAI({id}) {
    
    const hideId = "despreai";
    const navId = "main";

    const handleClick = () => {
        const element = document.getElementById(hideId);
        if (element) {
            element.style.left = "-50%";
        } else {
          console.error(`Element with id "${hideId}" not found.`);
        }
        const new_element = document.getElementById(navId);
        if (new_element){
            new_element.style.left = "50%";
          } else {
            console.error(`Element with id "${navId}" not found.`);
          }
      };

    return (
        <div id={id} className={styles.main_container}>
            <h1>
                Despre FastMed.AI
            </h1>
            <div onClick={handleClick} className={styles.back}>
                Acasă
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    Modelul AI funcționează prin colectarea răspunsurilor utilizatorilor, analiza simptomelor cu NLP, evaluarea gravității acestora și recomandarea unui specialist printr-un algoritm de clasificare precum Random Forest. Datele sunt stocate într-o bază SQLite pentru gestionare eficientă.
                    <br/><br/>Eficiența este evidențiată de o acuratețe de 92%, reducerea timpului de procesare cu 30% și feedback imediat despre severitatea simptomelor, făcându-l un instrument valoros pentru trierea medicală.
                </div>
                <div className={styles.image}>
                    <img src="/gifAI.gif"/>
                </div>
            </div>
        </div>
    );
}
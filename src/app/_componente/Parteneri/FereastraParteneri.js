"use client"

import styles from "@/app/_styles/fereastra_parteneri.module.css"

export default function FereastraParteneri({id}) {
        
    const hideId = "parteneri";
    const navId = "main";

    const handleClick = () => {
        const element = document.getElementById(hideId);
        if (element) {
            element.style.top = "150%";
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
                Parteneri
            </h1>
            <div onClick={handleClick} className={styles.back}>
                Acasă
            </div>
            <div className={styles.introduction}>
                Acest proiect a fost realizat cu ajutorul <a href="https://www.nagarro.com/">Nagarro</a> si a <a href="https://www.cs.ubbcluj.ro/">Facultăţii de Matematică şi Informatică</a> din cadrul UBB.
            </div>
            <div className={styles.nagarro}>
                <div className={styles.text}>
                    Nagarro este un lider global în inginerie digitală care ajută clienții să devină companii inovatoare, axate pe digital, pentru a reuși pe piețele lor. Compania se remarcă prin caracterul său antreprenorial, agil și global, prin mentalitatea sa de tip CARING (grijuliu) și prin viziunea sa Fluidic Enterprise. Nagarro are peste 17.900 de angajați în 37 de țări.
                    (<a href="https://www.nagarro.com/en/company">Nagarro</a>)
                </div>
                <div className={styles.img}>
                    <img src="/Nagarro.png"/>
                </div>
            </div>
            <div className={styles.ubb}>
                <div className={styles.img}>
                    <img src="/ubb.png"/>
                </div>
                <div className={styles.text}>
                    În anul trei al studiilor de licenţă în informatică din cadrul UBB am găsit ocazia de a realiza un proiect pe echipe cu oameni din diferite domenii (Business, Full-Stack Dev, AI) 
                    sprijiniţi de mai multe firme din Cluj-Napoca. Fiecare firma a venit cu nişte propuneri pentru studenţi, iar tema aleasă de noi "Sistem de Triaj Medical Digital" ne-a adus în colaborare 
                    cu Nagarro. Astfel ne-am adus toţi din echipă cunoştinţele de Web-Dev, RestAPI, AI, Business... şi am realizat această platformă de diagnosticare online. 
                </div>
            </div>
        </div>
    );
}
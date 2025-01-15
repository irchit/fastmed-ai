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
        </div>
    );
}
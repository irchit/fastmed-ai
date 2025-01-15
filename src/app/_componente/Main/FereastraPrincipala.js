"use client"

import styles from "@/app/_styles/fereastra_prinicpala.module.css"
import ButonLinkMain from "./ButonLinkMain"

export default function FereastraPrincipala ({id}) {

    const hideId = id;
    const navId = "diagnostic";

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
            <div className={styles.first_container}>
                <div className={styles.line_container} style={{ transform: `translateY(${20}px)`}}>
                    <img src="lineDot.png"/>
                </div>
                <div className={styles.header_container}>
                    <div className={styles.header_first}>
                        <div className={styles.img_container}>
                            <img src="/logo.png" />
                        </div>
                        <div className={styles.title_container}>
                            Descoperă soluţiile medicale aduse de Inteligenţa Artificială
                        </div>
                    </div>
                    <div>
                        <div className={styles.buton_diagnostic} onClick={handleClick}>
                            <img src="/HeartRatePulseGraph.png" />
                            <p>
                                Start Diagnostic
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.line_container} style={{ transform: `translateY(${-20}px)`}}>
                    <img src="lineDot.png"/>
                </div>
            </div>
            <div className={styles.buton_container}>
                <ButonLinkMain
                    text = "Despre AI"
                    image = "\despreAI.png"
                    color = "#CFFFEF"
                    open_id = "despreai"
                    hide_id = {id}
                    direction = "x"
                    transform = {100}
                />
                <ButonLinkMain
                    text = "Parteneri"
                    image = "\parteneriICO.png"
                    color= "#CFF9FF"
                    open_id = "parteneri"
                    hide_id = {id}
                    direction = "y"
                    transform = {-100}
                />
                <ButonLinkMain
                    text = "Echipa Noastră"
                    image = "\noi.png"
                    color = "#A7F1D9"
                    open_id = "desprenoi"
                    hide_id = {id}
                    direction = "x"
                    transform = {-100}
                />
            </div>
        </div>
    )
}
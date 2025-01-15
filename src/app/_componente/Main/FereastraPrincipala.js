import styles from "@/app/_styles/fereastra_prinicpala.module.css"
import ButonLinkMain from "./ButonLinkMain"

export default function FereastraPrincipala ({id}) {
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
                        <div className={styles.buton_diagnostic}>
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
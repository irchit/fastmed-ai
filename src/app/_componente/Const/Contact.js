import styles from "@/app/_styles/contact.module.css"
import ButonContact from "./ButonContact";

export default function Contact(){
    return (
        <div className={styles.contact_container}>
            <p>Unde ne puteţi găsi:</p>
            <div className={styles.links_container}>
                <ButonContact
                    link = "mailto:fastmed.ai.ubbcluj.com"
                    image = "/mail.png"
                />
                <ButonContact
                    link = "https://www.instagram.com/"
                    image = "/instagram.png"
                />
                <ButonContact
                    link = "https://www.youtube.com/"
                    image = "/yt.png"
                />
                <ButonContact
                    link = "https://www.x.com/"
                    image = "/x.png"
                />
            </div>
        </div>
    );
}
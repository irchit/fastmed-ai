import styles from "@/app/_styles/fereastra_despre_noi.module.css"

export default function Persoana({nume, rol, link, image}) {
    return (
        <div className={styles.persoana}>
            <img src={image}/>
            <p>{nume}<br/><span>{rol}</span></p>
            <a href={link}>Contact</a>
        </div>
    );
}
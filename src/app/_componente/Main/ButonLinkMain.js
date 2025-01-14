import styles from "@/app/_styles/buton_link_main.module.css"

export default function ButonLinkMain({text, image, color}){
    return (
        <div className={styles.buton} style={{ backgroundColor: color }}>
            <img src={image} />
            <p>{text}</p>
        </div>
    );
}
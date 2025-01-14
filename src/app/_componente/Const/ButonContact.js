import styles from "@/app/_styles/contact.module.css"

export default function ButonContact({image, link}){

    return (
        <div className={styles.link}>
            <a href={link}><img src={image}/></a>
        </div>
    );

}
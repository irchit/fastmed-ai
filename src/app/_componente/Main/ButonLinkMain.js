"use client"
import styles from "@/app/_styles/buton_link_main.module.css"

export default function ButonLinkMain({text, image, color, open_id, hide_id, direction, transform}){

    const navId = open_id;
    const hideId = hide_id;

    const handleClick = () => {
        const element = document.getElementById(hideId);
        if (element) {
            if (direction === "x")
                element.style.left = (50 + transform).toString() + "%";
            else
                element.style.top = (50 + transform).toString() + "%";
        } else {
          console.error(`Element with id "${hideId}" not found.`);
        }
        const new_element = document.getElementById(navId);
        if (new_element){
            if (direction === "x"){
                new_element.style.left = "50%";
            }
            else
                new_element.style.top = "50%";
          } else {
            console.error(`Element with id "${navId}" not found.`);
          }
      };

    return (
        <div onClick={handleClick} className={styles.buton} style={{ backgroundColor: color }}>
            <img src={image} />
            <p>{text}</p>
        </div>
    );
}
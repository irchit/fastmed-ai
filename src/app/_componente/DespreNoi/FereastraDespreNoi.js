"use client"

import styles from "@/app/_styles/fereastra_despre_noi.module.css"
import Persoana from "./Persoana";

export default function FereastraDespreNoi({id}) {

    const hideId = "desprenoi";
    const navId = "main";

    const handleClick = () => {
        const element = document.getElementById(hideId);
        if (element) {
            element.style.left = "150%";
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
                Echipa Noastră
            </h1>
            <div onClick={handleClick} className={styles.back}>
                Acasă
            </div>
            <div className={styles.persoane1}>
                <Persoana
                    nume = "Călin Anda Maria"
                    rol = "Business, App Development"
                    link = "https://www.linkedin.com/in/anda-maria-calin/"
                    image = "https://media.licdn.com/dms/image/v2/D4D03AQGOcNlxCUVjug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664341715013?e=1742428800&v=beta&t=2hipMdlzX6zJWXhdUoruKeMZhdD4TcDWMLL7F8KMHok"
                />
                <Persoana
                    nume = "Chiţea Răzvan"
                    rol = "App Development, Business"
                    link = "https://www.linkedin.com/in/irchitdev/"
                    image = "https://media.licdn.com/dms/image/v2/D4D03AQFBHXxhCjigHQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698249978464?e=1742428800&v=beta&t=D-6LfyKlkUt5eKermAkJHLpKatW9jpdrYQ_v4IALrvU"
                />
            </div>
            <div className={styles.persoane2}>
                <Persoana
                    nume = "Caba Victor Paul"
                    rol = "AI Development"
                    link = "https://www.linkedin.com/in/caba-paul-993b312b4/"
                    image = "https://media.licdn.com/dms/image/v2/D4D03AQGQkBYnyHrEZg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718222906643?e=1742428800&v=beta&t=F82BJrHw56t5qf4Ty9iE98fq19t0mDty_zkvhrpawuY"
                />
                <Persoana
                    nume = "Cojocariu Alexandra"
                    rol = "AI Development"
                    link = "https://www.linkedin.com/in/alexandra-cojocariu-6a5b11300/"
                    image = "https://media.licdn.com/dms/image/v2/D4D03AQFacgfZPJI92Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711475739008?e=1742428800&v=beta&t=huCUKQsMmOp4x5gGalPySLDaVmoCmJ-vBINn0UTRgDw"
                />
                <Persoana
                    nume = "Cioban Vasile"
                    rol = "AI Development"
                    link = "https://www.linkedin.com/in/vasile-cioban-68816525a/"
                    image = "https://media.licdn.com/dms/image/v2/D4E03AQHlAwHDQPe09Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670855820341?e=1742428800&v=beta&t=Axcp8Bn1ykwuUuY6v8TRXRk7BGU7RYks24b1swq4oqs"
                />
            </div>
        </div>
    );
}
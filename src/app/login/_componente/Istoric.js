"use client"
import axios from "axios";
import styles from "@/app/login/_styles/fereastra_principala.module.css"
import { useEffect, useState } from "react";

const url = "http://localhost:8080";

export const fetchUserHistory = async (username) => {
    try {
        const response = await axios.get(url + '/raspuns/by_utilizator/' + username);
        return response.data;
    } catch (error) {
        console.error('Error fetching raspunsuri:', error);
        return [];
    }
}

const updateIstoric = async (setIstoric, username) => {
    const istoric = await fetchUserHistory(username);
    setIstoric(istoric);
}

export default function Istoric({session}){
    
    const [istoric, setIstoric] = useState([]);

    const q = [    
        "Cât de des ai dureri de cap?",
        "Ai dificultăți în respirație?",
        "Cum te simți în legătură cu starea ta emoțională?",
        "Ai avut probleme digestive recente?",
        "Cum ți-e vederea?",
        "Cât de des faci sport?",
        "Ai avut vreo accidentare recentă?",
        "Cum te simți după mese?",
        "Ai probleme de somn?",
        "Cum ți se pare tensiunea arterială?"
    ]

    useEffect(
        () =>{
            const fetchData = async () => {
                await updateIstoric(setIstoric, session.foundUser.u_id);
            }
            fetchData();
        }
    )
    const handleClick = (id_div) => {
        const element = document.getElementById(id_div);
    
        if (element) {
            const currentDisplay = getComputedStyle(element).display;
    
            if (currentDisplay === "none") {
                element.style.display = "flex";
                element.style.flexDirection = "column";
            } else {
                element.style.display = "none";
            }
        }
    };
    

    function formatSubmissionDate(dateString) {
        const date = new Date(dateString);
    
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
    
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
    
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
    
    return (
        <div className={styles.istoric}>
            {
                (istoric.length === 0) ? <p style={{color: "white"}}>Niciun prompt trimis de utilizator in trecut...</p> : 

                istoric.map(
                    intrare => {

                        const questions = [];
                        for (let i = 0; i < 10; i++) {
                            questions.push(

                                <div key={`${intrare.r_id}_q${i}`}>
                                    <p>{`[${i+1}]: ${q[i]}`}</p>
                                    <p>R: {intrare[`q${i+1}`]}</p>
                                </div>

                            );
                        }

                        return(
                        <div className={styles.intrare} key={intrare.r_id}>
                            <p>
                                {`${formatSubmissionDate(intrare.submission_date)} | Raspuns: ${intrare.recommandation}`}
                            </p>
                            <button onClick={() => handleClick(intrare.r_id)}>deschide/inchide raport</button>

                            <div id={intrare.r_id} style={{display: "none"}}>
                                <p>Severitate: {intrare.severity}</p>
                                {questions}
                            </div>
                        </div>

                        )
                    }
                )
            }
        </div>
    );
}
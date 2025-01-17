"use client"

import styles from "@/app/_styles/fereastra_diagnostic.module.css"
import Intrebare from "./Intrebare";
import { useState, useEffect } from "react";
import MedicalUnitFinder from "./MedicalUnitFinder";
import axios from "axios";


export default function FereastraDiagnostic({id, session}) {
    
    const [responses, setResponses] = useState({});
    const [result, setResult] = useState(null);
    const [jsonResult, setData] = useState([]);

    var nume = "";
    var username = "";

    if (session){
        nume = session.foundUser.nume + " " + session.foundUser.prenume;
        username = session.foundUser.nume_utilizator;
    }

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {setData(data), console.log(data)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
    
    const handleChange = (e) => {
        setResponses({ ...responses, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://127.0.0.1:5000/evaluate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(responses),
        });
        const data = await res.json();
        setResult(data);

        const responseDB = {
            u_id: session.foundUser.u_id,
            q1: responses.question_0,
            q2: responses.question_1,
            q3: responses.question_2,
            q4: responses.question_3,
            q5: responses.question_4,
            q6: responses.question_5,
            q7: responses.question_6,
            q8: responses.question_7,
            q9: responses.question_8,
            q10: responses.question_9,
            submission_date: Date.now(),
            recommandation: data.recommendation,
            severity: data.severity
        }
        try{
            const response = await axios.post('http://localhost:8080/raspuns', responseDB);
            console.log("added!");
        } catch(err) {
            console.error('Error adding raspunsuri:', error);
        }

    };
        
    const questions = [    
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

    const hideId = id;
    const navId = "main";

    const handleClick = () => {
        const element = document.getElementById(hideId);
        if (element) {
            element.style.top = "-50%";
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
      const handleClickResult = () => {
          setResult(null);
        };

    return (
            <div id={id} className={styles.main_container}>
                <h1>
                    Formular pentru Diagnostic
                </h1>
                <div onClick={handleClick} className={styles.back}>
                    Acasă
                </div>
                {
                    result ? 
                    <div  className={styles.resultBox}>
                        <img src="/lineDot.png"/>
                        <div className={styles.result}>
                            <h2 style={{textShadow: `6px 6px 4px rgba(0, 0, 0, 0.75)`}}>Rezultate</h2>
                            <p>Medici recomandaţi: {result.recommendation}</p>
                            <p>Severitatea problemei: {result.severity}</p>
                            <MedicalUnitFinder
                                medicalUnits = {jsonResult}
                                selectedSpecializations = {result.recommendation.split(", ")}
                            />
                            <div onClick={handleClickResult} className={styles.reset}>
                                Chestionar Nou
                            </div>
                        </div>
                        <img src="/lineDot.png"/> 
                    </div>
                    : 
                    <div className={styles.formular}>
                        <p>{session ? `Acest formular va fi salvat pentru utilizatorul ${username}` : "Acest formular nu va fi salvat deoarece nu sunteti conectat."}</p>
                        <form onSubmit={handleSubmit}>
                            {
                                questions.map((q, index) => {
                                    return (
                                        <Intrebare
                                        key = {index}
                                        id = {index}
                                        intrebare = {q}
                                        handle_change = {handleChange}
                                        />
                                    );
                                })
                            }
                            <input type="submit" />
                        </form>
                    </div>
                }
            </div>
        );
}
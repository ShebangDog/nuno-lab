import React from "react";
import styles from "../styles/Member.module.css";

export default function Member(props) {
    let member = props.member

    return (
        <section className={styles.member}>
            <img src="./dog.png" alt={"member icon"} className={styles.memberIcon}/>
            <h2>{member.name}</h2>
        </section>
    )
}

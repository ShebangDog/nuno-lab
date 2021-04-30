import React from "react";
import styles from "../styles/Member.module.css";

export default function Member(props) {
    const data = props.data
    const isEntry = (data.event === "entry")
    const style = {
        backgroundColor: isEntry ? "green" : "red"
    }

    return (
        <section className={styles.member} style={style}>
            <img src="./dog.png" alt={"member icon"} className={styles.memberIcon}/>
            <h2>{data.name}</h2>
        </section>
    )
}

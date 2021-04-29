import Head from 'next/head'
import styles from "../styles/Member.module.css"
import Member from "../components/member";
import {useEffect, useState} from "react";

const home = function Home() {
    const url = "http://localhost:8080/members"
    const [data, setData] = useState([])

    useEffect(async () => {
        try {
            const result = await fetch(url)
            const data = await result.json()

            setData(data)
        } catch (error) {
            console.log(error)
        }
    }, [data])

    return (
        <div>
            <Head>
                <title>NunoLab</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <article>
                    <h1>布村研</h1>
                    <div className={styles.memberContainer}>
                        {data.map(member => <Member member={member} key={member.student_id}/>)}
                    </div>
                </article>
            </main>
        </div>
    )
}

export default home

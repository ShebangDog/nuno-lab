import Head from 'next/head'
import styles from "../styles/Member.module.css"
import Member from "../components/member";
import {useEffect, useState} from "react";
import DefaultMemberApiClient from "./api/default_member_api_client";
import MemberApiClient from "./api/member_api_client";

const home = function Home() {
    const [data, setData] = useState([])
    const apiClient = new MemberApiClient(DefaultMemberApiClient)

    useEffect(async () => {
        try {
            const members = await apiClient.fetchMembers()
                .then(result => result.json())

            const data = await Promise.all(members.map(async member => {
                const event = await apiClient.fetchAccessByStudentId(member.student_id)
                    .then(result => result.json())
                    .then(access => access == null ? "register" : access.event)

                return {
                    "student_id": member.student_id,
                    "name": member.name,
                    "event": event
                }
            }))

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
                        {data.map(elem => <Member data={elem} key={elem.student_id}/>)}
                    </div>
                </article>
            </main>
        </div>
    )
}

export default home

import styles from "./Dashboard.module.css"

export default function Dashboard(){
    return(
        <div className={styles.dashboard}>
            <span className={styles.availability}>Avaiable for new oppornunitites</span>
            <h1 className={styles.greetings}>Hi, I'm <span>Vasyl</span></h1>
            <h3 className={styles.title}>Devops Engineer</h3>
            <p className={styles.description}>Diving deep inot DevOps practices, concepts and tools</p>
            <button className={styles.works}>View portfolio</button>
        </div>
    )
}
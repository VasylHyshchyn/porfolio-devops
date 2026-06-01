import styles from "./Header.module.css"

export default function Header(){
    return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <div className={styles.avatar}></div>
            <span className={styles.namePos}>
                Vasyl Devops
            </span>
        </div>
        
        <nav>
            <ul className={styles.nav}>
                <li><a>About</a></li>
                <li><a>Contacts</a></li>
                <li><button className={styles.adminBtn}>Login as Admin</button></li>
            </ul>
        </nav>
    </header>
    )
}
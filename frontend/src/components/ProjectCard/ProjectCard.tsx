import type Project from "../../types/index.ts"
import styles from "./ProjectCard.module.css"

type Props  = {
    project: Project
}

export default function ProjectCard({project}: Props){
    return(
        <div className={styles.cardContent}>
            <span className={styles.dateCreated}>{project.createdAt}</span>
            <div className={styles.projectSpec}>
                <h2>{project.title}</h2>
                <div className={styles.techList}>
                    {project.techStack.map(tech => <span key={tech}>{tech}</span>)}
                </div>
                <div className={styles.links}>
                    {project.githubURL && <a href={project.githubURL}><span>Code</span></a>}
                    {project.githubURL && <a href={project.githubURL}><span>Demo</span></a>}
                </div>  
            </div>
        </div>
    )
}
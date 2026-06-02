import styles from "./ProjectList.module.css"
import ProjectCard from "../ProjectCard/ProjectCard";
import type Project from "../../types/index.ts"

type Props = {
    projects: Project[]
}



export default function ProjectList({projects}: Props){
    return(
        <div className={styles.projectList}>
            {projects.map(project => <ProjectCard project={project} key={project.id}/>)}
        </div>
    )
}
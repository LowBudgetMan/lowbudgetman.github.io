import projectStyles from './projects.module.css';
import styles from '../shared.module.css';
import { projects } from './projectsData';

export default function Projects() {
    return (
        <main className={styles.container}>
            <h1 className={`${styles.pageTitle} ${styles.projects}`}>Projects</h1>
            <p className={styles.paragraph}>
                Here are some of the projects I&apos;ve been lucky enough to work on. Each one represents the challenges, teams, and techniques
                that have helped me grow and learn. If you have the time, please check them out!
            </p>
            
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div key={index} className={`${styles.card} ${projectStyles.projectCard}`}>
                        <h2 className={projectStyles.cardTitle}>{project.title}</h2>
                        <p className={styles.cardContent}>
                            {project.description}
                        </p>
                        <div className={styles.skillsList}>
                            {project.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                        <div className={projectStyles.projectLinks}>
                            {project.links.map((link, linkIndex) => (
                                <a 
                                    key={linkIndex} 
                                    href={link.url}
                                    target="_blank"
                                    className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

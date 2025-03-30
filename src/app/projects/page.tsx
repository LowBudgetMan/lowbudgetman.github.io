import projectStyles from './projects.module.css';
import styles from '../shared.module.css';
import { projects } from './projectsData';

export default function Projects() {
    return (
        <main className={styles.container}>
            <h1 className={`${styles.pageTitle} ${styles.projects}`}>Projects</h1>
            <p className={styles.paragraph}>
                Here are some of the key projects I&apos;ve worked on throughout my career. Each project represents
                a unique challenge and learning opportunity that has helped shape my skills and approach to software development.
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
                                    className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <section className={styles.section}>
                <h2 className={`${styles.sectionTitle} ${styles.projects}`}>Open Source Contributions</h2>
                <p className={styles.paragraph}>
                    --
                </p>
            </section>
        </main>
    );
}

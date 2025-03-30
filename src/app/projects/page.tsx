import projectStyles from './projects.module.css';
import styles from '../shared.module.css';

export default function Projects() {
    return (
        <main className={styles.container}>
            <h1 className={`${styles.pageTitle} ${styles.projects}`}>Projects</h1>
            <p className={styles.paragraph}>
                Here are some of the key projects I&apos;ve worked on throughout my career. Each project represents
                a unique challenge and learning opportunity that has helped shape my skills and approach to software development.
            </p>
            
            <div className={styles.grid}>
                <div className={`${styles.card} ${projectStyles.projectCard}`}>
                    <h2 className={projectStyles.cardTitle}>E-Commerce Platform</h2>
                    <p className={styles.cardContent}>
                        A full-featured e-commerce platform built with React, Node.js, and MongoDB. 
                        Implemented features including product catalog, shopping cart, user authentication, 
                        payment processing, and order management.
                    </p>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>React</span>
                        <span className={styles.tag}>Node.js</span>
                        <span className={styles.tag}>MongoDB</span>
                        <span className={styles.tag}>Stripe API</span>
                    </div>
                    <div className={projectStyles.projectLinks}>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>View Demo</a>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>GitHub</a>
                    </div>
                </div>
                
                <div className={`${styles.card} ${projectStyles.projectCard}`}>
                    <h2 className={projectStyles.cardTitle}>Task Management App</h2>
                    <p className={styles.cardContent}>
                        A collaborative task management application with real-time updates using WebSockets. 
                        Features include task creation, assignment, status tracking, due dates, and team collaboration tools.
                    </p>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>TypeScript</span>
                        <span className={styles.tag}>React</span>
                        <span className={styles.tag}>Spring Boot</span>
                        <span className={styles.tag}>WebSockets</span>
                    </div>
                    <div className={projectStyles.projectLinks}>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>View Demo</a>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>GitHub</a>
                    </div>
                </div>
                
                <div className={`${styles.card} ${projectStyles.projectCard}`}>
                    <h2 className={projectStyles.cardTitle}>Health Tracking Dashboard</h2>
                    <p className={styles.cardContent}>
                        A comprehensive health metrics dashboard for visualizing and analyzing personal health data. 
                        Integrates with various fitness APIs and devices to provide insights and progress tracking.
                    </p>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>React</span>
                        <span className={styles.tag}>D3.js</span>
                        <span className={styles.tag}>Express</span>
                        <span className={styles.tag}>OAuth</span>
                    </div>
                    <div className={projectStyles.projectLinks}>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>View Demo</a>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>GitHub</a>
                    </div>
                </div>
                
                <div className={`${styles.card} ${projectStyles.projectCard}`}>
                    <h2 className={projectStyles.cardTitle}>Content Management System</h2>
                    <p className={styles.cardContent}>
                        A custom CMS built for a media company to manage digital content across multiple platforms. 
                        Features include content creation, scheduling, approval workflows, and analytics.
                    </p>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>Next.js</span>
                        <span className={styles.tag}>GraphQL</span>
                        <span className={styles.tag}>PostgreSQL</span>
                        <span className={styles.tag}>AWS</span>
                    </div>
                    <div className={projectStyles.projectLinks}>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>Case Study</a>
                    </div>
                </div>
                
                <div className={`${styles.card} ${projectStyles.projectCard}`}>
                    <h2 className={projectStyles.cardTitle}>Real-time Chat Application</h2>
                    <p className={styles.cardContent}>
                        A secure messaging platform with end-to-end encryption, file sharing, and group chat capabilities. 
                        Implemented with a microservices architecture for scalability.
                    </p>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>React</span>
                        <span className={styles.tag}>Socket.io</span>
                        <span className={styles.tag}>Node.js</span>
                        <span className={styles.tag}>Redis</span>
                    </div>
                    <div className={projectStyles.projectLinks}>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>View Demo</a>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>GitHub</a>
                    </div>
                </div>
                
                <div className={`${styles.card} ${projectStyles.projectCard}`}>
                    <h2 className={projectStyles.cardTitle}>Personal Finance Tracker</h2>
                    <p className={styles.cardContent}>
                        An application for tracking personal finances, including expense categorization, budget planning, 
                        financial goal setting, and visualization of spending patterns.
                    </p>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>Vue.js</span>
                        <span className={styles.tag}>Firebase</span>
                        <span className={styles.tag}>Chart.js</span>
                        <span className={styles.tag}>Plaid API</span>
                    </div>
                    <div className={projectStyles.projectLinks}>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>View Demo</a>
                        <a href="#" className={`${projectStyles.projectLink} ${styles.button} ${styles.secondaryButton}`}>GitHub</a>
                    </div>
                </div>
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

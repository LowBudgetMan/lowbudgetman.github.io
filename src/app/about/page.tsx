import styles from '../shared.module.css';

export default function About() {
    return (
        <main className={styles.container}>
            <section className={styles.section}>
                <h1 className={`${styles.pageTitle} ${styles.about}`} id="about-me">About Me</h1>
                
                <div className={styles.flexRow}>
                    <div className={styles.flexColumn} style={{ flex: '2' }}>
                        <p className={styles.paragraph}>
                            I&apos;m a <strong>software engineer</strong>, <strong>product architect</strong>, and <strong>tinkerer</strong> who
                            has been heavily invested in the agile mindset since I joined the workforce in 2016. I specialize
                            in quality, extensible code developed fast mainly in the web space. I&apos;m a fullstack engineer with the most
                            experience in React SPAs and Spring Boot REST APIs.
                        </p>
                        <p className={styles.paragraph}>
                            My journey in software engineering began with a fascination for solving complex problems and creating 
                            intuitive user experiences. Over the years, I&apos;ve developed a deep appreciation for clean code,
                            thoughtful architecture, and collaborative development practices.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Professional Experience</h2>
                
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Senior Software Engineer</h3>
                    <p className={styles.cardMeta}>Tech Company Inc. | 2020 - Present</p>
                    <p className={styles.cardContent}>
                        Leading development of scalable web applications using React, TypeScript, and Spring Boot. 
                        Architecting microservices and mentoring junior developers. Implementing CI/CD pipelines and 
                        improving code quality through automated testing.
                    </p>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>React</span>
                        <span className={styles.tag}>TypeScript</span>
                        <span className={styles.tag}>Spring Boot</span>
                        <span className={styles.tag}>Microservices</span>
                    </div>
                </div>
                
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Software Engineer</h3>
                    <p className={styles.cardMeta}>Digital Solutions Ltd. | 2016 - 2020</p>
                    <p className={styles.cardContent}>
                        Developed and maintained web applications for various clients. Collaborated in agile teams 
                        to deliver high-quality software solutions. Implemented responsive designs and RESTful APIs.
                    </p>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>JavaScript</span>
                        <span className={styles.tag}>Java</span>
                        <span className={styles.tag}>REST APIs</span>
                        <span className={styles.tag}>Agile</span>
                    </div>
                </div>
            </section>
            
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Education & Certifications</h2>
                
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Bachelor of Science in Computer Science</h3>
                    <p className={styles.cardMeta}>University of Technology | 2012 - 2016</p>
                    <p className={styles.cardContent}>
                        Graduated with honors. Focused on software engineering, algorithms, and web development.
                    </p>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Certifications</h3>
                    <div className={styles.cardContent}>
                        <ul style={{ listStylePosition: 'inside', marginBottom: '1rem' }}>
                            <li>AWS Certified Developer - Associate</li>
                            <li>Professional Scrum Master I (PSM I)</li>
                            <li>Oracle Certified Professional, Java SE 11 Developer</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Personal Interests</h2>
                <p className={styles.paragraph}>
                    When I&apos;m not coding, you can find me hiking in the mountains, experimenting with new cooking recipes,
                    or contributing to open-source projects. I&apos;m also an avid reader of technical books and blogs,
                    constantly seeking to expand my knowledge and skills in the ever-evolving tech landscape.
                </p>
                <p className={styles.paragraph}>
                    I believe in the power of technology to solve real-world problems and improve people&apos;s lives.
                    This belief drives my passion for creating software that is not only functional but also 
                    accessible, intuitive, and enjoyable to use.
                </p>
            </section>
        </main>
    );
}

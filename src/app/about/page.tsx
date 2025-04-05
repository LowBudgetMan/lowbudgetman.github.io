import styles from '../shared.module.css';
import aboutStyles from './about.module.css';
import { ALL_SKILLS } from '../projects/projectsData';

export default function About() {
    return (
        <main className={styles.container}>
            <section className={styles.section}>
                <h1 className={`${styles.pageTitle} ${styles.about}`} id="about-me">About Me</h1>

                <div className={styles.flexRow}>
                    <div className={styles.flexColumn} style={{flex: '2'}}>
                        <p className={styles.paragraph}>
                            I&apos;m a <strong>software engineer</strong>, <strong>product architect</strong>,
                            and <strong>tinkerer</strong> who
                            has been heavily invested in the agile mindset since I joined the workforce in 2016. I
                            specialize
                            in quality, extensible code developed fast mainly in the web space. I&apos;m a fullstack
                            engineer with the most
                            experience in React SPAs and Spring Boot REST APIs.
                        </p>
                        <p className={styles.paragraph}>
                            My journey in software engineering began with a fascination for solving complex problems and
                            creating
                            intuitive user experiences. Over the years, I&apos;ve developed a deep appreciation for
                            clean code,
                            thoughtful architecture, and collaborative development practices.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <h2 className={`${styles.sectionTitle} ${styles.about}`}>Skills</h2>
                <div>
                    <ul className={styles.skillsList}>
                        {ALL_SKILLS.map((skill, index) => (
                            <li key={index} className={styles.tag}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className={styles.section}>
                <h2 className={`${styles.sectionTitle} ${styles.about}`}>Professional Experience</h2>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Senior Software Engineer</h3>
                    <p className={styles.cardMeta}>WillowTree LLC, Charlottesville, VA (Remote) | May 2022 - Present</p>
                    <ul className={`${styles.cardContent} ${aboutStyles.jobDetails}`}>
                        <li>Worked as an embedded fullstack engineer on a client engagement while teaching best
                            practices like Test Driven Development and helping reduce the number of bugs while
                            delivering a high number of features quickly.
                        </li>
                        <li>Collaborated closely with the mobile team to develop the best API design for their use
                            during a tight timeframe, speeding up delivery through consistency and predictability and
                            increasing collaboration between design, product, and engineering.
                        </li>
                        <li>Onboarded new engineers fast during a twofold increase in engineering team size while
                            meeting an important client deadline.
                        </li>
                        <li>Designed SDKs for the client’s new Auth Server that significantly simplified interactions
                            with the service for other teams.
                        </li>
                        <li>Worked with client architecture to improve solutions and reduce scope for feature delivery
                            with heavy time / budget constraints.
                        </li>
                        <li>Implemented a mix of OAuth 2.1 standards and client requests for a custom client Auth Server
                            to replace existing solution.
                        </li>
                        <li>Adjusted industry standards to meet client ways of working when limited by pre-established
                            patterns and hierarchy, maximizing value added while minimizing disruption to existing
                            processes.
                        </li>
                    </ul>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>TDD</span>
                        <span className={styles.tag}>API Design</span>
                        <span className={styles.tag}>SDK Development</span>
                        <span className={styles.tag}>CI/CD</span>
                        <span className={styles.tag}>Monitoring</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Software Engineer</h3>
                    <p className={styles.cardMeta}>Ford Motor Company - FordLabs, Ann Arbor, MI | January 2018 - May
                        2022</p>
                    <ul className={`${styles.cardContent} ${aboutStyles.jobDetails}`}>
                        <li>Worked on many consumer facing fullstack products built in three month increments. Each
                            increment was built around getting a product in front of a user as quick as possible and
                            measuring the response to determine next steps using Lean Startup and eXtreme Programming
                            practices.
                        </li>
                        <li>Developed in pairs using Test-Driven Development and other extreme programming practices to
                            ensure peak delivery speed while maintaining quality code.
                        </li>
                        <li>Wrote and maintained an open source remote retrospective tool built on a Spring Boot backend
                            and Angular frontend to streamline internal company agile processes.
                        </li>
                        <li>Implemented public facing used car website to aggregate dealer listings and make shopping
                            for a used car easier through the use of guaranteed features on vehicles and filtering based
                            on one or two “most important” categories. Built on an Angular2 frontend, a Spring Boot
                            backend, and using AWS infrastructure.
                        </li>
                        <li>Built a React Native app on Android and iOS for drivers to use while testing goods delivery
                            with autonomous vehicles.
                        </li>
                        <li>Mentored junior engineers while pairing and presented informative talks during weekly
                            Lunch-and-Learn sessions.
                        </li>
                        <li>Performed phase II candidate interviews involving a test related to paired programming and
                            TDD in the style of Pivotal Labs’s Repeatable Programming Assessment.
                        </li>
                        <li>Implemented each team’s CI/CD pipeline and deployment strategy, including GitHub
                            actions/Jenkins pipelines, blue-green deployments, application performance metric monitoring
                            and interpretation, PCF workspaces / AWS VPCs, and artifact-based deployments.
                        </li>
                    </ul>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>eXtreme Programming</span>
                        <span className={styles.tag}>Lean Startup</span>
                        <span className={styles.tag}>Human Centered Design</span>
                        <span className={styles.tag}>Fullstack</span>
                        <span className={styles.tag}>Agile</span>
                        <span className={styles.tag}>CI/CD</span>
                        <span className={styles.tag}>Monitoring</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Software Engineer</h3>
                    <p className={styles.cardMeta}>Ford Motor Company, Dearborn, MI | June 2016 - January 2018</p>
                    <ul className={`${styles.cardContent} ${aboutStyles.jobDetails}`}>
                        <li>Built and maintained high throughput multiple microservice system and rules engine
                            responsible for customizing/configuring and ordering Ford vehicles.
                        </li>
                        <li>Contributed to large codebase using Spring Boot REST API and MS SQL Server.</li>
                        <li>Developed in a five pair environment where each pair was working off of main thanks to the
                            support of robust testing pipelines and zero downtime deployments.
                        </li>
                        <li>Maintained microservice architecture to enable high availability and opportunistic scaling
                            while keeping average transaction time below our SLA of 250ms.
                        </li>
                        <li>Implemented metrics and monitoring to quickly spot defects and outages.</li>
                        <li>Added new functionality based on stakeholder prioritization using Agile methodologies.</li>
                        <li>Set up nightly automated load testing and a set of continuous “canary” tests to verify
                            system readiness and integrity.
                        </li>
                    </ul>
                    <div className={styles.skillsList}>
                        <span className={styles.tag}>API Design</span>
                        <span className={styles.tag}>Microservices</span>
                        <span className={styles.tag}>Agile</span>
                        <span className={styles.tag}>CI/CD</span>
                        <span className={styles.tag}>Monitoring</span>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <h2 className={`${styles.sectionTitle} ${styles.about}`}>Education & Certifications</h2>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Bachelors of Engineering in Computer Science</h3>
                    <p className={styles.cardMeta}>Michigan State University | September&nbsp;2013 - May&nbsp;2016</p>
                    <p className={styles.cardContent}>
                        Graduated with a 3.53 GPA and a cognate focused on Business.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <h2 className={`${styles.sectionTitle} ${styles.about}`}>Personal Interests</h2>
                <p className={styles.paragraph}>
                    When I&apos;m not coding, you can find me hiking in the mountains, experimenting with new cooking
                    recipes,
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

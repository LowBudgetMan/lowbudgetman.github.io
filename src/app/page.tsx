import Link from 'next/link';
import styles from '../app/shared.module.css';
import homeStyles from './home.module.css';

export default function Home() {
  return (
      <main className={styles.container}>
        <section className={styles.section}>
          <div className={styles.flexColumn}>
            <h1 className={`${styles.pageTitle} ${styles.home}`}>Nick Reuter</h1>
            <h2 className={`${styles.sectionTitle} ${homeStyles.tagline}`}><span>Software Engineer</span><span>Product Architect</span><span>Tinkerer</span>
            </h2>
            <p className={styles.paragraph}>
              Welcome to my personal website! I&apos;m a passionate software engineer specializing in
              creating quality, extensible code with a focus on web technologies. With expertise in
              React SPAs and Spring Boot REST APIs, I bring a fullstack perspective to every project.
            </p>
            <div className={styles.flexRow}>
              <Link href="/about" className={`${styles.button} ${styles.secondaryButton}`}>
                Learn More About Me
              </Link>
              <Link href="/projects" className={`${styles.button} ${styles.secondaryButton}`}>
                View My Projects
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.sectionTitle} ${styles.about}`}>Featured Skills</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Frontend Development</h3>
              <p className={styles.cardContent}>
                Building responsive, accessible, and performant user interfaces using modern frameworks and best
                practices.
              </p>
              <div className={styles.skillsList}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>CSS Modules</span>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Backend Development</h3>
              <p className={styles.cardContent}>
                Designing and implementing robust APIs and services with a focus on scalability and maintainability.
              </p>
              <div className={styles.skillsList}>
                <span className={styles.tag}>Spring Boot</span>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>SQL</span>
                <span className={styles.tag}>RESTful APIs</span>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Product Architecture</h3>
              <p className={styles.cardContent}>
                Translating business requirements into technical solutions with a focus on long-term sustainability.
              </p>
              <div className={styles.skillsList}>
                <span className={styles.tag}>System Design</span>
                <span className={styles.tag}>Microservices</span>
                <span className={styles.tag}>API Design</span>
                <span className={styles.tag}>Technical Leadership</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.sectionTitle} ${styles.projects}`}>Featured Projects</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>HungryMoose</h3>
              <p className={styles.cardContent}>
                A set of libraries that use the same YAML request/response objects to both generate documentation and
                run as End-to-End API tests for Spring Boot RESTful API projects.
              </p>
              <div className={styles.skillsList}>
                <span className={styles.tag}>Spring Boot</span>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>HTML</span>
                <span className={styles.tag}>CSS</span>
                <span className={styles.tag}>REST API</span>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>RetroQuest</h3>
              <p className={styles.cardContent}>
                A remote retrospective tool to help facilitate Retros for dispersed teams.
              </p>
              <div className={styles.skillsList}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>Spring Boot</span>
                <span className={styles.tag}>WebSockets</span>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>SQL</span>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>PeopleMover</h3>
              <p className={styles.cardContent}>
                People allocation tool used to help facilitate movement of people between engagements based on
                preference.
              </p>
              <div className={styles.skillsList}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>Spring Boot</span>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>SQL</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.sectionTitle} ${styles.blog}`}>Latest Blog Posts</h2>
          <div className={styles.flexColumn}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Team Names Are Like Stock Tickers</h3>
              <p className={styles.blogDate}>March 15, 2025</p>
              <p className={styles.cardContent}>
                Exploring how team names in organizations function similarly to stock tickers - they should be
                memorable,
                consistent, and represent value changes over time to stakeholders.
              </p>
              <Link href="/blog" className={`${styles.button} ${styles.secondaryButton}`}>
                Read More
              </Link>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>The Benefits of Pair Programming</h3>
              <p className={styles.blogDate}>February 28, 2025</p>
              <p className={styles.cardContent}>
                Reflecting on my experiences with pair programming and how it has improved code quality,
                knowledge sharing, and team collaboration in my projects.
              </p>
              <Link href="/blog" className={`${styles.button} ${styles.secondaryButton}`}>
                Read More
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}

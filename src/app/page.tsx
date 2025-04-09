import Link from 'next/link';
import styles from '../app/shared.module.css';
import homeStyles from './home.module.css';
import { featuredProjects } from './projects/projectsData';

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
            <div className={`${styles.flexRow} ${homeStyles.homePageLinks}`}>
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
              <h3 className={styles.cardTitle}>Extreme Programming (XP)</h3>
              <p className={styles.cardContent}>
                Style of software development heavily rooted in agile software development principles that emphasizes high-quality software, rapid response to changing
                requirements, and a focus on the development team&apos;s quality of life.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Fullstack Engineering</h3>
              <p className={styles.cardContent}>
                Engineering across all cross-sections of the tech stack. Acting as a generalist learning where needed, enabling
                the development of complete applications from start to finish.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Lean Startup Methodologies</h3>
              <p className={styles.cardContent}>
                Emphasizes validated learning through short feedback loops to quickly test and iterate on
                business ideas by creating a minimum viable product (MVP) and gathering customer feedback to minimize
                waste and maximize efficacy.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.sectionTitle} ${styles.projects}`}>Featured Projects</h2>
          <div className={styles.grid}>
            {featuredProjects.map((project, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardContent}>
                  {project.description}
                </p>
                <div className={styles.skillsList}>
                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
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

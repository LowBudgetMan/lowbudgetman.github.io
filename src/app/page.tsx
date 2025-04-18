import Link from 'next/link';
import styles from '../app/shared.module.css';
import homeStyles from './home.module.css';
import { featuredProjects } from './projects/projectsData';
import { publishedBlogs } from './blog/publishedBlogs';
import { formatDate } from '@/DateDisplayService';

export default function Home() {
  return (
      <main className={styles.container}>
        <section className={styles.section}>
          <div className={styles.flexColumn}>
            <h1 className={`${styles.pageTitle} ${styles.home}`}>Nick Reuter</h1>
            <h2 className={`${styles.sectionTitle} ${homeStyles.tagline}`}>
              <span>Software Engineer</span><span>Tinkerer</span><span>Architect of Whimsy</span>
            </h2>
            <p className={styles.paragraph}>
              &quot;Ah, hello! Do come in and stay a while, I&apos;ve just put some water on. I&apos;ve had some thoughts that you might find... rather interesting.&quot;
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
            {publishedBlogs.length === 0 && <p className={`${styles.blog}`}>--</p>}
            {publishedBlogs[0] && (
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{publishedBlogs[0].name}</h3>
                <p className={styles.blogDate}>{formatDate(publishedBlogs[0].date)}</p>
                <div className={styles.cardContent}>
                  {publishedBlogs[0].previewParagraph}
                </div>
                <Link href="/blog" className={`${styles.button} ${styles.secondaryButton}`}>
                  Read More
                </Link>
              </div>
            )}

            {publishedBlogs[1] && (
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{publishedBlogs[1].name}</h3>
                <p className={styles.blogDate}>{formatDate(publishedBlogs[1].date)}</p>
                <div className={styles.cardContent}>
                  {publishedBlogs[1].previewParagraph}
                </div>
                <Link href="/blog" className={`${styles.button} ${styles.secondaryButton}`}>
                  Read More
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
  );
}

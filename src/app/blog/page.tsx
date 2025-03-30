import Link from 'next/link';
import styles from '../shared.module.css';

export default function Blog() {
    return (
        <main className={styles.container}>
            <h1 className={`${styles.pageTitle} ${styles.blog}`}>Ramblings</h1>
            <p className={styles.paragraph}>
                Welcome to my blog! Here, I share my thoughts, experiences, and insights on software development, 
                technology trends, and best practices. Feel free to explore the articles below.
            </p>
            
            <section className={styles.section}>
                <article className={styles.blogPost}>
                    <h2 className={`${styles.cardTitle} ${styles.blog}`}>Team Names Are Like Stock Tickers</h2>
                    <p className={styles.blogDate}>March 15, 2025</p>
                    <p className={styles.paragraph}>
                        Team names in organizations function similarly to stock tickers in many ways. They should be memorable, 
                        consistent, and represent value changes over time to stakeholders. A good team name sticks in people&apos;s
                        minds and becomes a shorthand for the team&apos;s purpose and contributions.
                    </p>
                    <p className={styles.paragraph}>
                        When choosing a team name, consider these key principles:
                    </p>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li>Memorability: Choose something that&apos;s easy to remember and reference</li>
                        <li>Consistency: Once established, avoid changing the name frequently</li>
                        <li>Representativeness: The name should reflect the team&apos;s purpose or domain</li>
                        <li>Distinctiveness: Ensure it&apos;s not easily confused with other teams</li>
                    </ul>
                    <p className={styles.paragraph}>
                        Just as stock tickers provide a quick reference for investors, team names offer a shorthand for 
                        organizational communication. They become part of the company&apos;s internal language and culture.
                    </p>
                    <Link href="/blog/team-names-are-like-stock-tickers" className={`${styles.button} ${styles.secondaryButton}`}>
                        Read Full Article
                    </Link>
                </article>
                
                <article className={styles.blogPost}>
                    <h2 className={`${styles.cardTitle} ${styles.blog}`}>The Benefits of Pair Programming</h2>
                    <p className={styles.blogDate}>February 28, 2025</p>
                    <p className={styles.paragraph}>
                        Pair programming is a software development technique where two programmers work together at one 
                        workstation. One, the driver, writes code while the other, the observer or navigator, reviews 
                        each line of code as it is typed in. The two programmers switch roles frequently.
                    </p>
                    <p className={styles.paragraph}>
                        Through my experiences with pair programming, I&apos;ve observed several key benefits:
                    </p>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li>Improved code quality through real-time code review</li>
                        <li>Knowledge sharing and skill development</li>
                        <li>Enhanced problem-solving through collaborative thinking</li>
                        <li>Reduced bugs and technical debt</li>
                        <li>Better team cohesion and communication</li>
                    </ul>
                    <p className={styles.paragraph}>
                        While pair programming may seem less efficient at first glance, the long-term benefits often 
                        outweigh the initial time investment. Teams that practice pair programming regularly often 
                        report higher overall productivity and code quality.
                    </p>
                    <Link href="/blog/pairing-plus-deltas" className={`${styles.button} ${styles.secondaryButton}`}>
                        Read Full Article
                    </Link>
                </article>
                
                <article className={styles.blogPost}>
                    <h2 className={`${styles.cardTitle} ${styles.blog}`}>Microservices vs. Monoliths: Finding the Right Balance</h2>
                    <p className={styles.blogDate}>January 15, 2025</p>
                    <p className={styles.paragraph}>
                        The debate between microservices and monolithic architectures continues to be a hot topic in 
                        software development. While microservices offer scalability and flexibility, monoliths provide 
                        simplicity and easier development. Finding the right balance for your specific project is crucial.
                    </p>
                    <p className={styles.paragraph}>
                        Based on my experience working with both architectures, here are some considerations to help you decide:
                    </p>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li>Team size and structure</li>
                        <li>Project complexity and scale</li>
                        <li>Deployment and operational requirements</li>
                        <li>Development velocity needs</li>
                        <li>Future growth projections</li>
                    </ul>
                    <p className={styles.paragraph}>
                        Remember that architecture is not a binary choice. Many successful systems use a hybrid approach, 
                        starting with a modular monolith and gradually extracting microservices as needed. The key is to 
                        align your architecture with your business needs and team capabilities.
                    </p>
                    <Link href="/blog/microservices-vs-monoliths" className={`${styles.button} ${styles.secondaryButton}`}>
                        Read Full Article
                    </Link>
                </article>
                
                <article className={styles.blogPost}>
                    <h2 className={`${styles.cardTitle} ${styles.blog}`}>The Importance of Automated Testing in CI/CD Pipelines</h2>
                    <p className={styles.blogDate}>December 10, 2024</p>
                    <p className={styles.paragraph}>
                        Continuous Integration and Continuous Deployment (CI/CD) have become standard practices in modern 
                        software development. At the heart of effective CI/CD pipelines lies automated testing, which ensures 
                        that code changes don&apos;t introduce regressions or new bugs.
                    </p>
                    <p className={styles.paragraph}>
                        A comprehensive testing strategy should include:
                    </p>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li>Unit tests for individual components</li>
                        <li>Integration tests for component interactions</li>
                        <li>End-to-end tests for complete user flows</li>
                        <li>Performance tests for system efficiency</li>
                        <li>Security tests for vulnerability detection</li>
                    </ul>
                    <p className={styles.paragraph}>
                        Investing in automated testing pays dividends through increased confidence in deployments, 
                        faster release cycles, and improved code quality. It&apos;s not just about catching bugs—it&apos;s about
                        enabling your team to move faster with greater confidence.
                    </p>
                    <Link href="/blog/automated-testing-cicd" className={`${styles.button} ${styles.secondaryButton}`}>
                        Read Full Article
                    </Link>
                </article>
            </section>
        </main>
    );
}

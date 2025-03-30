import Link from 'next/link';
import styles from '../../shared.module.css';

export default function TeamNamesAreStockTickers() {
    return (
        <main className={styles.container}>
            <Link href="/blog" className={`${styles.button} ${styles.secondaryButton}`} style={{ marginBottom: '2rem', display: 'inline-block' }}>
                ← Back to Blog
            </Link>
            
            <article>
                <h1 className={styles.pageTitle}>Team Names Are Like Stock Tickers</h1>
                <p className={styles.blogDate}>March 15, 2025</p>
                
                <section className={styles.section}>
                    <p className={styles.paragraph}>
                        Team names in organizations function similarly to stock tickers in many ways. They should be memorable, 
                        consistent, and represent value changes over time to stakeholders. A good team name sticks in people's 
                        minds and becomes a shorthand for the team's purpose and contributions.
                    </p>
                    
                    <p className={styles.paragraph}>
                        When choosing a team name, consider these key principles:
                    </p>
                    
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li>Memorability: Choose something that's easy to remember and reference</li>
                        <li>Consistency: Once established, avoid changing the name frequently</li>
                        <li>Representativeness: The name should reflect the team's purpose or domain</li>
                        <li>Distinctiveness: Ensure it's not easily confused with other teams</li>
                    </ul>
                    
                    <p className={styles.paragraph}>
                        Just as stock tickers provide a quick reference for investors, team names offer a shorthand for 
                        organizational communication. They become part of the company's internal language and culture.
                    </p>
                    
                    <h2 className={styles.sectionTitle}>Why Team Names Matter</h2>
                    
                    <p className={styles.paragraph}>
                        A well-chosen team name serves multiple purposes:
                    </p>
                    
                    <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li><strong>Identity and Cohesion:</strong> Creates a sense of belonging and shared purpose</li>
                        <li><strong>Communication Efficiency:</strong> Provides a quick reference in discussions and documentation</li>
                        <li><strong>Organizational Clarity:</strong> Helps map responsibilities and domains within the company</li>
                        <li><strong>Value Tracking:</strong> Can be used to represent changes in value over time to higher-ups at a glance</li>
                    </ol>
                    
                    <p className={styles.paragraph}>
                        The best team names become part of the organizational vocabulary and culture. They're used in 
                        conversations, presentations, and planning sessions without requiring explanation.
                    </p>
                    
                    <h2 className={styles.sectionTitle}>Best Practices for Team Naming</h2>
                    
                    <p className={styles.paragraph}>
                        When establishing or renaming teams, consider these guidelines:
                    </p>
                    
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li><strong>Keep it simple:</strong> Avoid complex or lengthy names that are hard to remember</li>
                        <li><strong>Ensure pronounceability:</strong> Names should be easy to say in conversation</li>
                        <li><strong>Consider acronyms:</strong> If using multiple words, check if the acronym works well</li>
                        <li><strong>Test for uniqueness:</strong> Verify the name isn't too similar to existing teams</li>
                        <li><strong>Align with purpose:</strong> The name should reflect the team's function or domain</li>
                        <li><strong>Don't change:</strong> Once established, maintain consistency to avoid confusion</li>
                    </ul>
                    
                    <p className={styles.paragraph}>
                        Remember that team names, like stock tickers, become shorthand references that carry meaning 
                        and value associations. Choose wisely, as a good name can enhance team identity and organizational 
                        communication for years to come.
                    </p>
                </section>
            </article>
        </main>
    );
}

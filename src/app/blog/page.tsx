import Link from 'next/link';
import styles from '../shared.module.css';
import { publishedBlogs } from './publishedBlogs';
import { formatDate } from '@/DateDisplayService';

export default function Blog() {
    return (
        <main className={styles.container}>
            <h1 className={`${styles.pageTitle} ${styles.blog}`}>Ramblings</h1>
            <section className={styles.section}>
                {publishedBlogs.length > 0 ? (
                    publishedBlogs.map((blog) => (
                        <article key={blog.name} className={styles.blogPost}>
                            <h2 className={`${styles.cardTitle} ${styles.blog}`}>{blog.name}</h2>
                            <p className={styles.blogDate}>{formatDate(blog.date)}</p>
                            <div className={styles.paragraph}>
                                {blog.previewParagraph}
                            </div>
                            <Link href={`/blog/${blog.slug}`} className={`${styles.button} ${styles.secondaryButton}`}>
                                Read Full Article
                            </Link>
                        </article>
                    ))
                ) : (
                    <article className={styles.blogPost}>
                        <p className={`${styles.paragraph} ${styles.blog}`}>--</p>
                    </article>
                )}
            </section>
        </main>
    );
}

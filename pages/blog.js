import Link from 'next/link';
import blogData from '../data/blogData.json';
import styles from './blog.module.css';

function Blog() {
    return (
        <div className={styles.container}>
            <h1>Blog</h1>

            {/* Link to Home Page */}
            <p>
                <Link href="/">Go to Home</Link>
            </p>

            <ul className={styles.list}>
                {blogData.map(post => (
                    <li key={post.id} className={styles.item}>
                        <Link href={`/post/${post.id}`} className={styles.link}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;

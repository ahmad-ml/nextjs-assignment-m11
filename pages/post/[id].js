import { useRouter } from 'next/router';
import blogData from '../../data/blogData.json';
import styles from './post.module.css';

function Post() {
    const router = useRouter();
    const { id } = router.query;

    // Find the post by ID from the blogData
    const post = blogData.find(p => p.id === id);

    if (!post) return <p>Loading...</p>; // Show loading text while the data is being fetched

    return (
<div className={styles.container}>
    <h1>{post.title}</h1>
    <p className={styles.date}>Date: {post.date}</p>
    <p>{post.content}</p>
    <p>
        <a href="/blog" className={styles.backLink}>Back to Blog</a>
    </p>
</div>
    );
}

export default Post;

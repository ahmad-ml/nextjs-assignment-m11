import Link from 'next/link';
import Footer from '../components/Footer';
import styles from './home.module.css';

function Home() {
    return (
<div className={styles.container}>
    <h1>Welcome to the Home Page</h1>
    <p>
        <Link href="/blog" className={styles.link}>Go to Blog</Link>
    </p>
    <Footer />
</div>
    );
}

export default Home;

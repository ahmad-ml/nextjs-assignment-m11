import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>About Me:</p>
            <ul className={styles.linksList}>
            <li>
    <a href="https://github.com/ahmad-ml" target="_blank" rel="noopener noreferrer">GitHub</a>
</li>
<li>
    <a href="https://www.linkedin.com/in/coolhead/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</li>

            </ul>
        </footer>
    );
}

export default Footer;

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Call or Text: <a className={styles.contactLink} href="tel:585-737-3143">(585)-737-3143</a>
      </div>
      <div>
        Email: <a className={styles.contactLink} href="mailto:danmillergardens@gmail.com">danmillergardens@gmail.com</a>
      </div>
      <address>Haddonfield, NJ</address>
    </footer>
  );
}
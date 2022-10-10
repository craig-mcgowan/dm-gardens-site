import styles from '../styles/Navbar.module.css'
import Link from 'next/link';

export default function Navbar(props) {
  const navLinks = [
    {text:"About", url:"/about"},
    {text:"Services", url:"/services"},
    {text:"Contact", url:"/contact"}
  ]


  return (
    <header className={styles.navbar}>
      <Link href="/">
        <img
          className={styles.logo}
          src="dm_logo_navybg.svg"
          alt="Dan Miller Gardens"
        />
      </Link>

      <nav className={styles.navLinks}>
        {navLinks.map((linky) => (
          <Link href={linky.url}>
            <a className={styles.link}>{linky.text}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
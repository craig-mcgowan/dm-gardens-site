import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import {GiHamburgerMenu} from "react-icons/gi";

export default function Navbar(props) {
  const navLinks = [
    {text:"About", url:"/about"},
    {text:"Services", url:"/services"},
    {text:"Contact", url:"/contact"},
    {text:"Projects", url:"/projects"}
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
        <div className={styles.menuBtn}>
          <GiHamburgerMenu />
        </div>

        {navLinks.map((linky) => (
          <Link href={linky.url}>
            <a className={styles.link}>{linky.text}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
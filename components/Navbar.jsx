import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from './navLinks';

export default function Navbar(props) {


  const [barOpen, setBarOpen] = useState(false);

  const handleToggleMenubar = () => {
    setBarOpen(!barOpen);
    console.log('toggle menu bar')
  };

  const closeMenuBar = () => {
    if (barOpen) {
      setBarOpen(false);
    }
  };


  return (
    <header className={barOpen ? styles.menuBarOpen : styles.navbar}>
      <div>
      <Link href="/" className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="dm_logo_navybg.svg"
          alt="Dan Miller Gardens"
          />
      </Link>
      <div className={styles.menuBtn} onClick={() => handleToggleMenubar()}>
        <GiHamburgerMenu />
      </div>

      <nav className={styles.navLinks}>
        <NavLinks listStyle="headerList" linkStyle="headerLink" />
      </nav>
      </div>
    </header>
  );
}
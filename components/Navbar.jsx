import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from './navLinks';

export default function Navbar(props) {


  


  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="dm_logo_navybg.svg"
          alt="Dan Miller Gardens"
        />
      </Link>

      <nav className={styles.navLinks}>
        <div className={styles.menuBtn} onClick={() => props.toggler()}>
          <GiHamburgerMenu />
        </div>
        <NavLinks listStyle="headerList" linkStyle="headerLink" />
      </nav>
    </header>
  );
}
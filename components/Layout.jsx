import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import styles from "../styles/Layout.module.css";
import SideBar from "./sideBar.jsx";

export default function Layout({ children }) {
  const [barOpen, setBarOpen] = useState(false)

  const handleToggleMenubar = () => {
    setBarOpen(!barOpen)
  }

  const closeMenuBar = () => {
    if (barOpen) {
      setBarOpen(false)
    }

  }




  return (
    <>
      <div onClick={() => closeMenuBar()}>
        <Navbar toggler={handleToggleMenubar} linkStyle="headerLink" />
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </div>
      {/* <SideBar barOpen={barOpen} className={styles.sidebar} /> */}
    </>
  );
}

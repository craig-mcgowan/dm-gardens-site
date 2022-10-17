import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import styles from "../styles/Layout.module.css";
import SideBar from "./sideBar.jsx";

export default function Layout({ children }) {
  const [barOpen, setBarOpen] = useState(false)

  const handleToggleSidebar = () => {
    setBarOpen(!barOpen)
  }

  const closeSidebar = () => {
    if (barOpen) {
      setBarOpen(false)
    }

  }




  return (
    <>
      <div onClick={() => closeSidebar()}>
        <Navbar toggler={handleToggleSidebar} linkStyle="headerLink" />
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </div>
      <SideBar barOpen={barOpen} />
    </>
  );
}

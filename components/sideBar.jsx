import { useState, useEffect } from "react"
import NavLinks from "./navLinks"
import styles from "../styles/SideBar.module.css"


const SideBar = ({barOpen}) => {

  return (
    <div className={barOpen ? styles.containerOpen : styles.container}>
      <NavLinks linkStyle="sidebarLink" listStyle="sidebarList" />
    </div>
  );

}

export default SideBar;
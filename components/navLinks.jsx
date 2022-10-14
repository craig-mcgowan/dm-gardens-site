import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/NavLinks.module.css"

const NavLinks = (props) => {
    const pages = [
    {text:"About", url:"/about"},
    {text:"Services", url:"/services"},
    {text:"Contact", url:"/contact"},
    {text:"Projects", url:"/projects"}
  ]
  

  return (
    <div>  
      {
        pages.map((linky) => (
          <Link href={linky.url}>
            <a className={styles.link}>{linky.text}</a>
          </Link>
        ))}
    </div>
  )
}


export default NavLinks
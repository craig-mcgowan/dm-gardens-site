import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/NavLinks.module.css"

const NavLinks = ({linkStyle, listStyle}) => {
    const pages = [
    {text:"About", url:"/about"},
    {text:"Services", url:"/services"},
    {text:"Contact", url:"/contact"},
    {text:"Projects", url:"/projects"}
    ]
  const router = useRouter();

  

  return (
    <div className={styles[listStyle]}>  
      {
        pages.map((linky) => (
          <div>
            <Link href={linky.url}>
              <a className={styles[linkStyle]}>{linky.text}</a>
            </Link>
            {router.pathname === linky.url ? <div className={styles.pageIndicator}></div> : <div></div>}
          </div>
        ))}
    </div>
  )
}


export default NavLinks
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/NavLinks.module.css"

const NavLinks = ({linkStyle, listStyle}) => {
    const pages = [
    // {text:"About", url:"/about"},
    // {text:"Services", url:"/services"},
    {text:"Contact", url:"/contact"},
    {text:"Services", url:"/services"},
    // {text:"Services", url:"/services"},
    ]
  const router = useRouter();

  const scroller = elID => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 50,
      behavior: 'smooth'
    })

  }
  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    console.log(goto)
    setTimeout(() => {
      scroller(goto);
    }, 100);
  };

  

  return (
    <div className={styles[listStyle]}>  
      {
        pages.map((linky) => (
          <div>
            {/* <Link href={linky.url}> */}
              <a className={styles[linkStyle]} goto={linky.text} onClick={onBtnClick}>{linky.text}</a>
            {/* </Link> */}
            {router.pathname === linky.url ? <div className={styles.pageIndicator}></div> : <div></div>}
          </div>
        ))}
    </div>
  )
}


export default NavLinks
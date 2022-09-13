import styles from '../styles/Navbar.module.css'


export default function Navbar(props) {
  const navLinks = [
    {text:"About", url:"/about"},
    {text:"Services", url:"/services"},
    {text:"Contact", url:"/contact"}
  ]
  return (
    <header className={styles.navbar}>
      <img className={styles.logo}
        src="https://res.cloudinary.com/dm9ig1vtk/image/upload/v1663018672/Dan%20Miller%20Gardens/danmiller_logo_color_4inch_jezxzg.jpg"
        alt="Dan Miller Gardens"
      />

      <nav className={styles.navLinks}>
        {navLinks.map((linky) => (
          <div className={styles.link}>
              {linky.text}
          </div>))}
      </nav>
    </header>
  );
}
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <Footer/>
    </>
  );
}

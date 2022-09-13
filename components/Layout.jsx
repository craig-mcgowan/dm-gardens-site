import Navbar from "/components/Navbar.jsx";
import Footer from "/components/Footer.jsx";
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

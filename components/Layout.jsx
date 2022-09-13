import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <Footer/>
    </>
  );
}

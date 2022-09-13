import Navbar from "./Navbar";
import Footer from "./Footer";
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

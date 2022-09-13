import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
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

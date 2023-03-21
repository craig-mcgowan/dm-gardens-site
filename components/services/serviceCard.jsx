import styles from "./serviceCard.module.css"

export default function ServiceCard({ text, img }) {
  return (
    <div className={styles.serviceCard}>
      <p className={styles.serviceLabel}>{text}</p>
      <img
        className={styles.serviceThumb}
        src={img}
        alt={text}
      ></img>
    </div>
  );
}
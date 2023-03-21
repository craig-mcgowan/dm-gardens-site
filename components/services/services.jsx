import styles from "../styles/Index.module.css";
import services from "../../public/services";

export default function Services(props) {
  
  <section className={styles.services}>
  <h3 className={styles.sectionHeader}>Services</h3>
  <div className={styles.servicesContainer}>
  {services.map((service) => {
    return (
      <div className={styles.serviceCard}>
      <p className={styles.serviceLabel}>{service.text}</p>
      <img
      className={styles.serviceThumb}
      src={service.img}
      alt={service.text}
      ></img>
      </div>
      );
    })}
    </div>
    </section>;
  }

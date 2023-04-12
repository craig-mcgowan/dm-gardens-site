import styles from './Services.module.css';
import services from "../../public/services";
import ServiceCard from './serviceCard';

export default function Services(props) {
 

  return (
    <section className={styles.services} id="Services">
      <h3 className={styles.sectionHeader}>Services</h3>
      <div className={styles.servicesContainer}>
        {services.map((service) => (
          <ServiceCard text={service.text} img={service.img} />
        ))}
      </div>
    </section>
  );
  }

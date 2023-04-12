import styles from '../styles/Index.module.css'
import Services from '../components/services/services';
import TestimonialCarousel from '../components/testimonialCarousel';
import Mission from '../components/mission/mission';
import ContactForm from '../components/ContactForm';

export default function Home() {

  

  return (
    <div className="container">
      <div className={styles.banner}>
        <div className={styles.description}>
          <p className={styles.slogan}>
            {
              //todo plug in Dan's wording
            }
            Your Outdoor Spaces Amplified
          </p>
          <p className={styles.dmGardens}>
            Dan Miller Gardens
          </p>
        </div>
      </div>
      <Services />
     
      <TestimonialCarousel />
      <Mission id='Our Process' />
      <ContactForm id='Contact'/>
      
    </div>
  );
}

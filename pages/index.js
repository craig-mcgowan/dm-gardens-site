import styles from '../styles/Index.module.css'
import services from '../public/services';
import TestimonialCarousel from '../components/testimonialCarousel';

export default function Home() {
  return (
    <div className="container">
      <div className={styles.banner}>
        <div className={styles.description}>
          <p>
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
      <section className={styles.services}>
        {services.map((service) => {
          return (
            <figure className={styles.serviceCard}>
              <img className={styles.serviceThumb} src={service.img}></img>
              <figcaption>{service.text}</figcaption>
            </figure>
          );
        })}
      </section>
      <TestimonialCarousel />
      <section>
        Our Process Upon making an inquiry into our services, Dan will typically
        meet with a client to walk their property and discuss their specific
        needs. A unique estimate and proposal is then created for the customer
        to review. Revisions can be made as needed before the customer approves
        a final work order. We are a service-first company, and our customers’
        satisfaction is our top priority. We take great pride in creating and
        maintaining landscapes and we are always happy to answer any questions
        before, during or after the completion of a project. Sustainable
        practices: Minimizing environmental impact is a key part of our approach
        to landscaping and gardening. Here are some of the sustainable practices
        we employ: Minimizing landfill: We take into consideration the waste
        generated from our projects from start to finish. We use products with
        less packaging, and recycle and/or reuse leftover packaging when
        appropriate. When reworking an existing landscape, salvageable plants
        and materials are often donated. Waste that is compostable is composted.
        We take pride in the stewardship of our clients’ properties,
        neighborhoods, and the environment. Tools and equipment: Using the best
        tool for the job is always a top priority in our work. Unfortunately
        landscaping equipment (particularly two-stroke gas engines) can often be
        noisy and dirty polluters. We keep our equipment in peak condition to
        ensure high quality work, reduce the risk of injury and keep them
        running as clean as possible. Our fleet of battery-powered equipment can
        be used in many situations, and they reduce the emissions and noise that
        comes with gas engines. As the technology of battery-powered equipment
        improves, we will continue to make investments in tools that drive
        productivity and reduce our carbon footprint. Native and low maintenance
        plant selection: We aim to create landscapes that blend with surrounding
        natural ecosystems. We believe it’s important to conserve local bird,
        bee and insect populations of a native landscape. Where applicable, we
        also plan landscapes to reduce stormwater runoff. We prefer plant
        material that is native and resistant to drought, which reduces watering
        needs.
      </section>
    </div>
  );
}

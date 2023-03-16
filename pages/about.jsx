import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className="page">
      <h1>About Dan Miller Gardens</h1>
      <img
        className={styles.headshot}
        src="https://res.cloudinary.com/dm9ig1vtk/image/upload/v1663032945/Dan%20Miller%20Gardens/DM_Headshot_myo4n6.webp"
        alt="Dan Miller"
      />
      <p className={styles.blurb}>
        Dan Miller Gardens provides landscape design, installation and
        maintenance. Our mission is to improve the appearance and functionality
        of your outdoor space. We aim to make our neighborhoods more beautiful
        and healthy places to live. 
      </p>
      <p className={styles.blurb}>
        Dan’s journey in horticulture started in 2007 working for a landscaping
        company in his hometown of Fairport, NY. After graduating college, Dan
        moved to New York City to pursue a career in landscape design and
        received his Certificate of Horticulture from Brooklyn Botanic Garden in
        2016. He spent 10 years in New York working for premier landscape design
        firms, leading projects in upscale residential buildings and commercial
        properties such as Google, Spotify, Carnegie Hall, Chase Corporate
        offices and more. Dan lives in Haddonfield, NJ, with his wife and son.
      </p>
      <p className={styles.blurb}>
        Dan lives in Haddonfield, NJ, with his wife and son.
      </p>
    </div>
  );
}
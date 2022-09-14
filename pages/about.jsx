import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
      <h1>About Dan</h1>
      <img className={styles.headshot}
        src="https://res.cloudinary.com/dm9ig1vtk/image/upload/v1663032945/Dan%20Miller%20Gardens/DM_Headshot_myo4n6.webp"
        alt="Dan Miller"
      />
      <p>
        Landscape and garden professional with over 10 years experience.
        Landscape services including planting, hardscaping, irrigation and
        lighting. My goal is to improve the functionality and beauty of your
        outdoor space while providing exceptional service.
      </p>
    </>
  );
}
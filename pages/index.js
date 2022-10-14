import styles from '../styles/Index.module.css'


export default function Home() {
  return (
    <div className="container">


      <main className={styles.main}>
        <p className={styles.description}>
          Dan is based in Haddonfield, NJ, and specializes in garden design,
          plantings, maintenance, hardscaping, lighting, and irrigation. Full
          web site coming soon! For inquiries, call or text Dan at
          (585)-737-3143 or email danmillergardens@gmail.com.
        </p>
      </main>
    </div>
  );
}

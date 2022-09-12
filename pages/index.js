import Head from 'next/head'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dan Miller Gardens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="https://res.cloudinary.com/dm9ig1vtk/image/upload/v1663018672/Dan%20Miller%20Gardens/danmiller_logo_color_4inch_jezxzg.jpg"></img>
        <p className="description">
          Dan is based in Haddonfield, NJ, and specializes in garden design,
          plantings, maintenance, hardscaping, lighting, and irrigation. Full
          web site coming soon! For inquiries, call or text Dan at
          (585)-737-3143 or email danmillergardens@gmail.com.
        </p>
      </main>
    </div>
  );
}

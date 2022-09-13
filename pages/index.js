import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="container">


      <main>
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

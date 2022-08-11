import Head from 'next/head'
import Aboutus from '../components/Aboutus'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { useRouter } from 'next/router'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Something Legendary | It is in the solitude that legends are born</title>
        <meta name="description" content="Somenthing Legendary: It is in the solitude that legends are born." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Aboutus/>
      <Contact />
      <section className=' bg-cyan-700 py-6'>
      <div className="content">
      <h2 className='font-serif text-2xl'>New section</h2>
      </div>
      </section>
      <section className='bg-slate-300 py-6'>
      <div className="content">
      <h2 className='font-serif text-2xl text-black'>New section</h2>
      </div>
      </section>
      <Footer />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "hero"])),
      // Will be passed to the page component as props
    },
  };
}

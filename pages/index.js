import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Something Legendary | It is in the solitude that legends are born</title>
        <meta name="description" content="Somenthing Legendary: It is in the solitude that legends are born." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-6 max-w-4xl mx-auto min-h-screen">
      <Menu />
      <Hero />
      </main>
      <section className='bg-slate-300 py-6'>
      <div className="content">
      <h2 className='font-serif text-2xl text-black'>New section</h2>
      </div>
      </section>
      <section className=' bg-cyan-700 py-6'>
      <div className="content">
      <h2 className='font-serif text-2xl'>New section</h2>
      </div>
      </section>
      <Footer />
    </div>
  )
}

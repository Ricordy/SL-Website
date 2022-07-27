import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Something Legendary | It is in the solitude that legends are born</title>
        <meta name="description" content="Somenthing Legendary: It is in the solitude that legends are born." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-6 max-w-4xl mx-auto">
      <Menu />
        <h1 className="">
          Something Legendary
        </h1>

        <p className="">
          It is in the solitude that legends are born.
        </p>
      </main>

      <Footer />
    </div>
  )
}

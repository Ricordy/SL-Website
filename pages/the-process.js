import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import TheProcessComponent from '../components/TheProcess'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function TheProcess() {
  const { t } = useTranslation('the-process')

  return (
    <>
      <Head>
        <title>Something Legendary | It is in the solitude that legends are born</title>
        <meta name="description" content="Somenthing Legendary: It is in the solitude that legends are born." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TheProcessComponent />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","the-process"])),
    },
  };
}
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import MissionComponent from '../components/Mission'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Mission() {
  const { t } = useTranslation('mission')

  return (
    <>
      <Head>
        <title>Something Legendary | It is in the solitude that legends are born</title>
        <meta name="description" content="Somenthing Legendary: It is in the solitude that legends are born." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MissionComponent />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","mission"])),
    },
  };
}
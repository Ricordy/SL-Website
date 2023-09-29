import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Layout({ children }) {
  const router = useRouter();
  const transparentNavRoutes = ["/", "/how-it-works"];
  const isProduction = process.env.NODE_ENV === "production";

  const GTM_ID = process.env.NEXT_PUBLIC_GTM;

  return (
    <>
      <Head>
        <title>Something Legendary</title>
        <meta
          name="description"
          content="Somenthing Legendary: It is in the solitude that legends are born."
        />
        <meta
          name="facebook-domain-verification"
          content="nq6zlcsumkvh9qc7o5vb5si6v8zmpk"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
      </Script>

      {!transparentNavRoutes.includes(router.route) && <Navbar />}
      <main className="bg-white max-w-[1440px] mx-auto">{children}</main>
      <Footer />
    </>
  );
}

import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const transparentNavRoutes = ["/", "/how-it-works"];
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
      {!transparentNavRoutes.includes(router.route) && <Navbar />}
      <main className="bg-white max-w-[1440px] mx-auto">{children}</main>
      <Footer />
    </>
  );
}

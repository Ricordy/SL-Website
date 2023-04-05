import Banner from "../components/Banner";
import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col mx-auto w-full">
        <Banner
          title="Now is the time to ride together"
          subtitle={
            <p className="text-white">
              Your <span className="font-medium">dream</span> commands your{" "}
              <span className="font-medium">life</span>. It&apos;s time to put
              your hands on our steering wheel and follow your{" "}
              <span className="font-medium">legendary path</span>.
            </p>
          }
          image="bg-[url('/headers/contact-us.jpg')]"
        />
        <Contact title="Contact Us" />
      </div>
    </section>
  );
};

export default ContactUs;

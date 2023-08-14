import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Events() {
  const { t } = useTranslation("events");

  return (
    <section>
      <div className="content">
        <h2 className="text-3xl mb-12 font-serif">
          {t("events.section-title")}
        </h2>
      </div>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "events",
        "about-us",
      ])),
    },
  };
}

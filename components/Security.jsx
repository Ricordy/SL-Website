import { useTranslation } from "next-i18next";

function Security() {
  const { t } = useTranslation("security");
  return (
    <section id="security" className="bg-slate-700 text-slate-100">
      <div className="content">
        <h2 className="text-3xl mb-12 font-serif">
          {t("security.section-title")}
        </h2>
        <ul>
          <li>{t("security.audit")}</li>
          <li>{t("security.gdpr")}</li>
          <li>{t("security.funds")}</li>
        </ul>
      </div>
    </section>
  );
}

export default Security;

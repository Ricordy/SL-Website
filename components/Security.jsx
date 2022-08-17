import { useTranslation } from 'next-i18next'
import React from 'react'

function Security() {
  const { t } = useTranslation('security');
  return (
    <section id="security">
      <div className="content">
      <h2 className="text-3xl mb-12 font-serif">{t("security.section-title")}</h2>
      <ul>
        <li>{t("security.audit")}</li>
        <li>{t("security.gdpr")}</li>
        <li>{t("security.funds")}</li>
      </ul>
      </div>
    </section>
  )
}

export default Security
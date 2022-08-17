import { useTranslation } from 'next-i18next'
import React from 'react'

function Security() {
  const { t } = useTranslation('security');
  return (
    <section id="security">
      <h2>{t("security.section-title")}</h2>
      <ul>
        <li>{t("security.audit")}</li>
        <li>{t("security.gdpr")}</li>
        <li>{t("security.funds")}</li>
      </ul>
    </section>
  )
}

export default Security
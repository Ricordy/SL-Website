import { useTranslation } from 'next-i18next'
import React from 'react'

function Mission() {
  const { t } = useTranslation();

  return (
    <section id="mission">
    <div className="content">
      <h2 className="text-3xl mb-12 font-serif">{t("mission")}</h2>
      <p>Here comes the Mission/Vision/Values content</p>
    </div>
    </section>
  )
}

export default Mission
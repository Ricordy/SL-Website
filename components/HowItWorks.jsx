import { useTranslation } from 'next-i18next'
import React from 'react'
import { RiNumber1 } from 'react-icons/ri';
import { RiNumber2 } from 'react-icons/ri';
import { RiNumber3 } from 'react-icons/ri';

function HowItWorks() {
  const { t } = useTranslation('how-it-works');
  return (
    <section id="how-it-works">
      <div className="content">
        <h2 className="text-3xl mb-12 font-serif">{t("how-it-works.title")}</h2>
        <div className="text-2xl my-3 font-serif flex items-center"><RiNumber1 className='p-1 mr-3 border border-white rounded-full' />{t("how-it-works.step1-title")}</div>
        <div className="step-item">{t("how-it-works.step1-item1")}</div>
        <div className="step-item">{t("how-it-works.step1-item2")}</div>
        <div className="text-2xl my-3 font-serif flex items-center"><RiNumber2 className='p-1 mr-3 border border-white rounded-full' />{t("how-it-works.step2-title")}</div>
        <div className="step-item">{t("how-it-works.step2-item1")}</div>
        <div className="step-item">{t("how-it-works.step2-item2")}</div>
        <div className="text-2xl my-3 font-serif flex items-center"><RiNumber3 className='p-1 mr-3 border border-white rounded-full' />{t("how-it-works.step3-title")}</div>
      </div>
    </section>
  )
}

export default HowItWorks
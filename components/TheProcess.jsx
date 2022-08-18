import { useTranslation } from 'next-i18next'
import Image from 'next/image';
import car1 from "../public/car-1.png";
import car2 from "../public/car-2.png";
import car3 from "../public/car-3.png";
import { RiNumber1 } from 'react-icons/ri';
import { RiNumber2 } from 'react-icons/ri';
import { RiNumber3 } from 'react-icons/ri';


function TheProcess() {
  const { t } = useTranslation('the-process');
  return (
    <section id="the-process">
    <div className="content">
    <h2 className="text-3xl mb-12 font-serif">{t("the-process.section-title")}</h2>
    <div className="flex flex-col gap-12">
      <div className="flex gap-6">
        <Image src={car1} alt="Step 1"/>
        <div className="description">
          <RiNumber1 className='font-bold text-6xl rounded-full p-2 font-serif bg-slate-500'/>
          <p>Here comes the description</p>
        </div>
      </div>
      <div className="flex sm:flex-row-reverse">
        <Image src={car2} alt="Step 2" className=''/>
        <div className="description">
          <RiNumber2 className='font-bold text-6xl rounded-full p-2 font-serif bg-slate-500'/>
          <p>Here comes the description</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Image src={car3} alt="Step 3"/>
        <div className="description">
          <RiNumber3 className='font-bold text-6xl rounded-full p-2 font-serif bg-slate-500'/>
          <p>Here comes the description</p>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}
export default TheProcess
import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../FadeInWhenVisible'
import { FaqPanel } from './FaqPanel/index'

interface FaqSectionProps {
  children?: ReactNode
}

const FAQS = [
  {
    id: 1,
    title: 'Emergency Response',
    content:
      'The worst drought in 40 years has us assisting with therapeutic feeding and providing food parcels to communities who are suffering at the hand of another missed harvest.',
  },
  {
    id: 2,
    title: 'Water, sanitation and hygiene (WASH)',
    content:'We provide safe, clean water to sustain life, be it drilling boreholes or rehabilitating existing wells, and training in hygiene practices to prevent disease, malnutrition, and even death. We also educate communities in climate-smart practices to conserve water.',
      },
  {
    id: 3,
    title: 'Health and nutrition',
    content:
      " In partnership with local malnutrition clinics and outpatient centres, we screen for malnutrition, provide therapeutic milk, therapeutic food, vitamins, deworming, and vaccinations as well as training for medical staff, mothers, and caregivers in essential health, care, and nutrition practices.",
  },
  {
    id: 4,
    title:
      'Education',
    content:
      'We partner with local schools to encourage and increase attendance by providing daily meals to scholars. Take-home rations are provided for the child and their family when schools close due to factors like Covid-19. We currently run computer literacy programmes and teach Science Technology Engineering and Mathematics (STEM) using Lego’s Six Bricks initiative.',
  },  
{
    id: 5,
    title: 'Food security and livelihoods',
    content:
      'Together with our local communities, we grow school and communal gardens and provide training for their upkeep. This secures families with a source of nutritious food and an income from selling surplus produce. In 2021 about 300kgs of large cabbages, green peppers, and onions were harvested at school gardens alone.',
}
]

export const FaqSection: React.FC<FaqSectionProps> = () => {
  return (
    <section id="faq" className=" bg-transparent">
      

      <div className="pb-5 mx-auto text-nblack">
        <FadeInWhenVisible>
          {FAQS.map((faq, index) => {
            return (
              <FaqPanel
                index={index}
                title={faq.title}
                content={faq.content}
                key={faq.id}
              />
            )
          })}
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
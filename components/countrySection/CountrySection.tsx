import Image from "next/image";
// import Faq from "../Faq/Faq";
import { FaqSection } from "../FaqSection";
import { motion } from "framer-motion";


const CountrySectionData = [
    {
        number: '1',
        id: 'angola',
        title: 'Angola',
        description: 'Angola is one of Africa’s most resource-rich countries, yet two thirds of the population live on less than $2 a day and do not see the benefits. Additionally, the country has high infant mortality rates, poor access to clean water and sanitation , high illiteracy rates and is now facing its worst drought in 40 years.',
        image: 'https://www.forafrika.org/wp-content/uploads/2022/04/Water-For-Afrika.jpg',
       imagealt: 'water for afrika',
        imageBottom: 'https://www.forafrika.org/wp-content/uploads/2022/04/Water-For-Afrika.jpg' ,
      statsTitle: 'Angola at a glance 2022',
    stats: [
        {
            number: '985,626',
            title: 'People reached',
        },
        {
            number: '7,443,500',
            title: 'Meals served',
        },
        {
            number: '954,062',
            title: 'Clean water',
        },
        {
            number: '100',
            title: 'Boreholes drilled',
        },
    ],
},


    {
        number: '2',
        id: 'central-african-republic',
        title: 'Central African Republic',
        description: 'The Central African Republic is one of the poorest countries in the world. The country has been in a state of conflict since 2013, with the majority of the population living in poverty and lacking access to basic services. The country is also one of the most vulnerable to climate change, with 80% of the population dependent on agriculture for their livelihoods.',
        image: 'https://www.forafrika.org/wp-content/uploads/2023/01/Central-African-Republic-ForAfrika.jpg',
        imageBottom: 'https://www.forafrika.org/wp-content/uploads/2023/01/CAR-ForAfrika.jpg',
      imagealt: 'central african republic',
        statsTitle: 'Angola at a glance 2022',
        stats: [
            {
                number: '985,626',
                title: 'People reached',
            },
            {
                number: '7,443,500',
                title: 'Meals served',
            },
            {
                number: '954,062',
                title: 'Clean water',
            },
            {
                number: '100',
                title: 'Boreholes drilled',
            },
        ],
    },
    {
        number: '3',
        id: 'mozambique',
        title:'Mozambique',
        description: 'Although the country is endowed with ample arable land, water, energy, as well as mineral resources, Mozambique is still grappling with a military insurgency in parts of the gas-rich province of Cabo-Delgado. An estimated three million people are projected to face high levels of food insecurity across the country due to the combined effects of the conflict, climate shocks and economic instability.',
        image: 'https://www.forafrika.org/wp-content/uploads/2022/04/Mozambique.jpg',
        imageBottom: 'https://www.forafrika.org/wp-content/uploads/2022/04/Mozambique.jpg'
        ,imagealt: 'mozambique',
        statsTitle: 'Mozambique at a glance 2022',
        stats: [
//             People rached
// 628,494
// Meals served
// 903,330
// Clean water
// 354,857
// Nutrition gardens
// 25,449

            {
                number: '628,494',
                title: 'Meals served',
            },
            {
                number: '903,330',
                title: 'Clean water',
            },
            {
                number: '354,857',
                title: 'Nutrition gardens',
            },
            {
                number: '25,449',
                title: 'People reached',
            },
        ],

    },

    {
        number: '4',
        id: 'south-africa',
        title: 'South Africa',
        description: 'South Africa is the most developed country in Africa, yet 40% of the population still live in poverty. The country is also facing significant challenges in the areas of water, sanitation and hygiene, climate change, food security and education.',
        image: 'https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg',
        imageBottom: 'https://www.forafrika.org/wp-content/uploads/2023/01/CAR-ForAfrika.jpg',
   
        imagealt: 'south africa',
        statsTitle: 'South Africa at a glance 2022',
        stats: [
            {
                number: '985,626',
                title: 'People reached',
            },
            {
                number: '7,443,500',
                title: 'Meals served',
            },
            {
                number: '954,062',
                title: 'Clean water',
            },
            {
                number: '100',
                title: 'Boreholes drilled',
            },
        ],

    },
]
    

const CountrySection = () => {
    return (
        <div className="py-32 bg-[#f3efea] ">
            {
                CountrySectionData.map((item, index) => (
                    <div 
                    key={index}
                    className="w-full mx-auto px-4">
                <div
                id={item.id}
                 className="flex flex-col items-start px-2 justify-start">
                    <h1  className="text-5xl font-normal font-Regular font-serif mb-5  text-[#262633]">
                        
                        {item.title}
                        </h1>

                    </div>
                    {/* discription */}
                    <div className="flex border-l ml-9 px-5 py-2 border-black flex-col items-start justify-start">
                        <p className="text-xl font-normal font-serif text-[#262633]">
                            {/* We are working in 4 countries across Africa to improve the lives of the most vulnerable people.</p> */}
                            
                            {item.description}
                            </p>
                            </div>

                            {/* Image Right FAQ Component on left Section  */}
                            <div className="flex flex-col lg:flex-row items-end justify-between">

                                {/* FAQ Component on left Section  */}
                                <div className="flex flex-col lg:w-[35%] w-full h-full mt-20 items-start md:items-center justify-start md:justify-center">
                                    {/* <Faq /> */}
                                    <FaqSection />
                                    </div>

                                    {/* Image Right FAQ Component on left Section  */}
                                    <div className="flex flex-col w-full mx-1 h-[500px] px-2 lg:w-[65%]  items-center justify-center">
                                        {/* <ImageRight /> */}

                                        <Image
                                            src={item.image}

                                            // "https://www.forafrika.org/wp-content/uploads/2022/04/Water-For-Afrika.jpg"
                                            alt={item.imagealt}
                                            width={500}
                                            height={500}
                                            className="object-cover rounded-xl w-full h-full"
                                        />
                                        </div>

                                        </div>
                                        {/* stats  */}
                                        <div className="flex flex-col py-20 lg:py-32  w-full mx-auto">
                                           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                            <h1 className="text-3xl font-normal text-start font-serif mb-5 text-[#262633]">
                                                {item.statsTitle}
                                                </h1>


                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                                  
                                                    {   
                                                        item.stats.map((item, index) => (
                                  <div key={index} className="flex py-3 w-60  flex-col items-start border-t-[1px] border-black justify-center">

<h6 className="text-xl font-normal font-serif text-[#262633]">
    {item.number}
</h6>
<p className="text-lg font-normal font-serif text-[#262633]">
    {item.title}
</p>
</div>              ))      }
</div>
</div>

{/* Full width Image Section */}
<motion.div
//    fadeInUp animation
   initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.2  }}


 className="flex w-full h-[400px] pt-16 items-center justify-center">
    <Image
        src={item.imageBottom}
        alt="Picture of the author"
        width={500}
        height={500}
        className="object-cover rounded-xl w-full h-full"
        // layout="fill"
    />
</motion.div>




                                        </div>
                                        </div>
                                        ))


            }
            

                      
        </div>
    );
}

export default CountrySection;
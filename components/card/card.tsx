import React from 'react';

import Red from '@/public/Pattern-background-red.svg'
// import Afr from '@/public/Pattern-background-red.svg'
import Afr from '@/public/IamForAfrikaDay.svg'

import { motion } from 'framer-motion';
import Image from 'next/image';


const CardY = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        
         className="h-full w-full">
        
        <div className="relative overflow-hidden rounded-lg mx-auto shadow-lg w-[24rem] h-[550px] sm:w-[35rem] md:w-[37rem] xl:w-[40rem]  md:h-[32rem] xl:h-[26rem] cursor-pointer">
          <Image className="object-cover w-full h-full" 
          src={Afr}
            width={300}
            height={150}
          alt="Flower and sky"
          />
      
          <div className="absolute top-[15%] text-left font-serif left-0 px-6 py-8">
            <h4 
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-offset="0"
            className="mb-4 text-3xl md:text-4xl font-normal tracking-tight text-white"
            // font-family: "Untitled Regular", Helvetica, Arial, sans-serif;
            >The challenges of our continent are diverse and complex but together we can overcome them</h4>
            <div 
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-offset="0"
            className="flex flex-col">
            <p 
            // font-family: "Söhne Leicht", Helvetica, Arial, sans-serif;
            className="leading-normal text-lg md:text-xl text-gray-100">
                Your support means access to education, food, water, health, income, and dignity for those who need it most. Our locally led interventions and your generosity will save lives, build resilience, and bring hope as we work together for an Africa that thrives.
                </p>

                {/* Donate now link underline  */}
                <div className="flex text-left justify-start my-4 border-b-2 w-fit transition-all duration-1000 ease-out border-white hover:border-transparent">
                <a href="#" className="text-white text-sm md:text-base font-medium pb-2">Donate now</a>
</div>  
</div>              
          </div>
        </div>
      
        </motion.div>
    );
}

export default CardY;
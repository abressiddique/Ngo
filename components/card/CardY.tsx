import React from 'react';

import yellow from '@/public/Pattern-background-yellow.svg'
import { motion } from 'framer-motion';
import Image from 'next/image';
import {RiDoubleQuotesR} from 'react-icons/ri'


const CardB = () => {
    return (
      <div className="h-full w-full flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className=" max-w-xl sm:max-w-3xl md:max-w-7xl lg:max-w-7xl px-3 py-32">
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
         className="relative overflow-hidden rounded-lg mx-auto shadow-lg max-w-8xl w-[25rem] md:w-[45rem] lg:w-[50rem] xl:w-[60rem] h-[30rem] md:h-[26rem] xl:h-[27rem] cursor-pointer">
          <Image className="object-cover w-full h-full" 
          src={yellow}
            width={200}
            height={100}
          alt="Flower and sky"
          />
      
          <div className="absolute top-0 text-left font-serif left-0 px-6 py-8">
            <h4 
            data-aos = 'fade-up'
            data-aos-duration = '1000'
            data-aos-delay = '100'
            data-aos-offset = '0'
            data-aos-easing = 'ease-in-out'
            className="mb-3 md:mb-7 text-2xl md:text-3xl font-normal tracking-tight text-white">
           <RiDoubleQuotesR
           className='text-[100px] text-white mr-2'
           />
                </h4>
                
            <p 
              data-aos = 'fade-up'
              data-aos-duration = '1000'
              data-aos-delay = '100'
              data-aos-offset = '0'
              data-aos-easing = 'ease-in-out'
            // font-family: "Söhne Leicht", Helvetica, Arial, sans-serif;
            className="leading-normal text-lg md:text-xl text-gray-100">
                The scale of the challenge is enormous, but so are the dreams of Africa’s people. If we all come together for Africa, providing the resources needed to plant the seeds of transformation, we can and will see Africa’s communities shift away from charity to self-sufficiency. From surviving to thriving!
                </p>

                {/* Donate now link underline  */}
                <div 
                  data-aos = 'fade-up'
                  data-aos-duration = '1000'
                  data-aos-delay = '100'
                  data-aos-offset = '0'
                  data-aos-easing = 'ease-in-out'
                className="flex text-left justify-start my-4 w-fit transition-all duration-1000 ease-out">
                <a href="#" className="text-white text-base md:text-lg font-semibold pb-2">Isak Pretorius:  CEO</a>
</div>                
          </div>
        </motion.div>
      
        </div>
        </div>
    );
}

export default CardB;
import Image from 'next/image';
import React from 'react';
// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { motion } from 'framer-motion';
const data = [
  { id: 1, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/Emergency-Response-ForAfrika.jpg', 
  text: 'Emergency response',
  details: 'We offer vital support and resources to our communities when they need us most.'

},
  { id: 2, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/For-Afrika-Water.jpg', 
  text: 'Water, Sanitation and hygein',
  details: 'We provide clean water, sanitation and hygiene to communities in need.'
 },
  { id: 3, image: 'https://www.forafrika.org/wp-content/uploads/2022/07/ForAfrika-Charity.jpg',
   text: 'Food Security and livelyhood',
  details: 'We help communities to grow their own food and provide them with the tools and training to generate an income.'
  },
  { id: 4, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/ForAfrika-Health.jpg', text: 'Health and Nutrition', details: 'We provide access to healthcare and nutrition to ensure that no one is left behind.' },
  { id: 5, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/Education-For-Afrika.jpg', text: 'Education', details: 'We provide access to education and training to ensure that no one is left behind.'  },
  { id: 6, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/Economic-Empowerment.jpg', text: 'Economic-Empowerment', details: 'We provide access to education and training to ensure that no one is left behind.' },
    { id: 7, image: 'https://www.forafrika.org/wp-content/uploads/2022/07/ForAfrika-Charity.jpg', text: 'Environment', details: 'We provide access to education and training to ensure that no one is left behind.' },
    // { id: 8, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/For-Afrika-Disaster-Management.jpg', text: 'Disaster Management' },
//   { id: 7, image: 'image7.jpg', text: 'Text 7' },
//   { id: 8, image: 'image8.jpg', text: 'Text 8' },
];

const ImageSlider = () => {
  return (

    // fade in from below motion 
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
     className="flex w-full mx-auto lg:mx-auto lg:max-w-7xl flex-wrap">
        <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={7}
      // slidesPerView={4}
      // slidesPerView='auto'

      centeredSlides={true}

      className="mySwiper w-full"
      breakpoints={{
        320: {
          slidesPerView: 1.3,
          // spaceBetween: 8,
        },
        768: {
          slidesPerView: 1.6,
          // spaceBetween: 5,
        },

        800: {
          slidesPerView: 2.3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 3.1,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 4,
           spaceBetween: 10,
        },
      }}
      // navigation
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >

      {data.map((item, index) => (
        
        // <div 
        // className='w-80 bg-green-600 z-40 h-96'
        // key={index} >
        
            <SwiperSlide
            key={item.id}
            className="w-full h-full flex flex-col items-center   mx-0 px-0 justify-center"
            >
       <div className={`w-72 h-96 overflow-hidden md:w-80 md:h-[500px] ${ index % 2 === 0 ? "mt-9" : ""}`}>

          <Image
          src={item.image} alt={item.text}
          width={80}
            height={200}
           className="w-full h-auto rounded-xl px-2 object-cover  growImg" />
          </div>
          <div className="flex px-3 flex-col pt-3 justify-center text-center items-center">

          <h1 className=" text-tblack font-bold text-xl">{item.text}</h1>
          <p className="pt-3 w-full text-tblack text-base italic">{item.details}</p>
          </div>


            </SwiperSlide>
        // </div>
      ))}

      </Swiper>
    </motion.div>
  );
};

export default ImageSlider;
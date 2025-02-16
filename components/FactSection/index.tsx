/* eslint-disable react/jsx-no-undef */

import Image from 'next/image';


import child from 'https://www.forafrika.org/wp-content/uploads/2022/08/Feed-a-child.jpg'


const FactSection = () => {
    return (
        <div className="flex flex-col md:flex-row py-20 items-center justify-center">
            <div className="flex flex-col items-center overflow-hidden  w-full px-3 md:w-1/2 xl:w-3/5 justify-center">
             <div className="overflow-hidden rounded-xl shadow-xl max-w-xl w-full h-full">

                <Image 
                 src={'https://www.forafrika.org/wp-content/uploads/2022/08/Feed-a-child.jpg'}
                 width={300}
                  height={300} 
                //   className="w-full overflow-hidden ease-in-out h-auto rounded-xl object-cover transition-transform hover:duration-500 transform scale-100  hover:scale-110"
className='transition duration-500 ease-in-out w-full h-full rounded-xl max-w-xl hover:scale-110'
                 alt="feed a child" />
             </div>


                </div>

                <div className="flex flex-col text-left pt-10 md:w-1/2 xl:w-2/5 px-6 md:px-3 justify-center">
                    <h2 className="text-4xl font-normal font-serif pb-10 text-[#262633] text-center md:text-left helvetica-neue-regular">
                    Did you know that by giving $96, you will feed a child in Africa for an entire year? That’s only $8 per month!
                    </h2>

                    <h5 className="text-2xl font-normal font-serif text-[#262633] text-center md:text-left ">
                    This is a whole lot more than food. Find out what it means to children living in low-income countries in Africa.
                    </h5>

                        {/* Donate now link underline  */}
                        <div className="flex text-left justify-start my-4 border-b-2 w-fit transition-all duration-1000 ease-out border-black hover:border-transparent">
                <a href="#" className="text-[#262633] text-base md:text-lg font-semibold pb-2">Donate now</a>
</div>                

                        </div>
                        </div>
    );
}

export default FactSection
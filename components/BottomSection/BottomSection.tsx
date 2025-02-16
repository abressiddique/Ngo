import Image from "next/image";



const BottomSection = () => {
    return (
        <div
        id="card"
        style={{
          backgroundImage: "url(/img/nature6.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          position: "relative",
          top: "10%",
        }}
        className='w-full max-w-6xl lg:max-w-7xl px-2 lg:px-6 py-16 lg:py-28 relative mx-auto'>
        <div className="py-20 ">
        <div className=" w-full  md:max-w-4xl pb-12 mb-2 text-center mx-auto">

          
<h1 className="md:text-3xl text-2xl font-light pb-4 md:pb-6 text-center text-tblack">Our Work</h1>
<p className="text-xl md:text-2xl font-normal text-center text-tblack font-serif"> We listen to the priorities of our people and together design programmes that give all African people the ability to thrive.</p>

</div>

            <div className="flex flex-col md:flex-row h-fit w-screen max-w-7xl px-1 justify-center items-center">
              {/* create a background Image  with a button on the top right and a text in the center  */}
                <div className="w-full md:w-1/2 px-1 h-[32rem]">
                <div className="relative w-full mx-auto  mb-32 md:mb-10">
                    <Image
                    src='https://www.forafrika.org/wp-content/uploads/2023/02/loveforafrika-800x800_c.jpg'

                    width={450}
                    height={400}
                    alt="2 child huging"
                    className="rounded-xl"
                    />
                    <div className="absolute top-6 left-3">
                        <button className="bg-white btn uppercase hover:bg-slate-200 opacity-80 duration-500 ease-out rounded-full">Form the Field</button>
                        </div>
                        <div className="absolute top-1/2 left-28 transform -translate-x-1/2 -translate-y-1/2">
                            <h6 className="text-white text-base font-normal tracking-wider font-serif ">Love for Africa</h6>
                            </div>

                            </div>
                            </div>

                            <div className=" w-full md:w-1/2 px-2 h-[32rem]">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className='block'>
                                    <div className="relative">
                                        <Image
                                        src='https://www.forafrika.org/wp-content/uploads/2023/01/Lillian-Achirochan-attending-to-expectant-mothers-480x280_c.jpg'
                                        height={150}
                                        width={400}
                                        className="rounded-xl"
                                        alt="A child eating"
                                        />
                                         <div className="absolute top-3 left-3">
                                            <button   className="bg-white btn uppercase hover:bg-slate-200 opacity-80 duration-500 ease-out rounded-full"
                                             >Emergency Response</button>
                                            </div>

                                            </div>
                                            <p className="text-left text-[#cf2e2e] py-3 font-serif font-normal text-sm">
                                                ForAfrika saves the lives of gunshot patients – and delivers new babies</p>

                                            </div>
                                            <div className='block'>
                                            <div className="relative">
                                        <Image
                                        src='https://www.forafrika.org/wp-content/uploads/2023/01/SA-Early-Childhood-Development-480x280_c.jpg'
                                        height={150}
                                        width={400}
                                        className="rounded-xl"
                                        alt="A child eating"
                                        />
                                       <div className="absolute top-3 left-3">
                                       <button className="bg-white btn uppercase hover:bg-slate-200 opacity-80 duration-500 ease-out rounded-full"
                                       >From the Fields</button>
                                            </div></div>
                                            <p className="text-left text-[#cf2e2e] py-3 font-serif font-normal text-sm">
                                    Photo Essay: Volunteers transform a pre-school – and the lives of children
                                    </p>
                                    </div>
                                    <div className= "block">

                                            <div className="relative">
                                        <Image
                                        src='https://www.forafrika.org/wp-content/uploads/2022/11/LOI_S_Drought_Sep_043-ST-L-scaled-480x280_c.jpg'
                                        height={150}
                                        width={400}
                                        className="rounded-xl"
                                        alt="A man standing"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <button
                                             className="bg-white btn uppercase hover:bg-slate-200 opacity-80 duration-500 ease-out rounded-full"
                                            >In the Media</button>
                                            </div>

                                            </div>
                                            <p className="text-left text-[#cf2e2e] py-3 font-serif font-normal text-sm">
                                                ForAfrika’s work in Kenya featured in the Guardian
                                                </p>
                                                </div>

                                                <div className= "block">

<div className="relative">
<Image
src='https://www.forafrika.org/wp-content/uploads/2022/08/Isabel-480x280_c.jpg'
height={150}
width={400}
className="rounded-xl"
alt="A man standing"
/>
<div className="absolute top-3 left-3">
<button className="bg-white btn uppercase hover:bg-slate-200 opacity-80 duration-500 ease-out rounded-full">In the Fields</button>
</div>

</div>
<p className="text-left text-[#cf2e2e] py-3 font-serif font-normal text-sm">
    Isabel new begining
    </p>
    </div>
                                          
                                            </div>
                                            </div>
                                            </div>
        </div>
        </div>
    );
}

export default BottomSection;
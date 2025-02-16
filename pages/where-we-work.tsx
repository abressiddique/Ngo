import { Title } from "@/components/Shared/Title/title"
import NavSection from "@/components/Shared/nav/NavSection";
import CountrySection from "@/components/countrySection/CountrySection";
import ClientLayout from "@/layout/Client";
import Image from "next/image";

const WhereWeWork = () => {
    return (
        <ClientLayout >
              <section className="w-screen bg-white  md:px-3 xl:px-6">
            <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12 ">
                <div className="flex w-full justify-start items-center">
                    <Title title="Where We Work"
                    padding="py-20" 
                    paragraph="We love this place and we love our people. Africa is home and we know what needs to be done to see it thrive."/>
                </div>
            </div>

           {/* one Lager Image Section */}
            <div className="w-full max-w-5xl h-[700px] lg:max-w-6xl px-3 lg:px-6 py-16 lg:py-28 relative mx-auto">
                <Image
                    src="https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg"
                    layout="fill"
                    className="rounded-xl"
                    alt=""
                    />

                    </div>

                    {/* text center section  */}
                    <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-16 lg:py-28 relative mx-auto">
                    <div className="mx-auto text-center lg:mx-0 lg:flex-auto">
            <h5
                // font-family: "Söhne Leicht", Helvetica, Arial, sans-serif;
            className="text-4xl font-extralight  leading-[50px] tracking-wider text-[#262533] sm:text-4xl">
            Through innovative solutions and on a scale of operational magnitude that rivals some of the largest distribution networks in the world, we work with communities to co-create the environment every African needs to thrive.
            </h5>
            </div>
            </div>

    <section>
        
        <NavSection title={""} id={""} />

       <CountrySection />
               
    </section>

        </section>
        </ClientLayout>
    );
}

export default WhereWeWork;
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header/Header'
import CardB from '@/components/card/card'
import ImageSwipper from '@/components/ImageSlideSection'
import FactSection from '@/components/FactSection'
import CardY from '@/components/card/CardY'
import BottomSection from '@/components/BottomSection/BottomSection'
import Footer from '@/components/Footer'
import CompanyLogo from '@/components/Company'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NGO</title>
        <meta name="description" content=" A non-profit organization (NPO), also known as a non-business entity, not-for-profit organization, or nonprofit institution, is an organization dedicated to furthering a particular social cause or advocating for a shared point of view. In economic terms, it is an organization using its surplus of the revenues to further achieve its ultimate objective, rather than distributing its income to the organization's shareholders, leaders, or members. Nonprofits are tax exempt or charitable, meaning they do not pay income tax on the money that they receive for their organization. They can operate in religious, scientific, research, or educational settings. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className='bg-bgwhite w-screen'>
      <div className="relative w-screen">
        <div className="bg-hero-section bg-no-repeat h-screen w-screen bg-center bg-cover">
          <video autoPlay loop muted className="absolute inset-0 object-cover w-screen h-screen xl:h-auto">
            <source
              src="Home/robovice-banner.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 w-full max-w-3xl md:max-w-4xl">
            <div className="sm:text-5xl leading-9 h-96 w-full sm:w-[40rem] xl:w-[44rem] tracking-wider  text-4xl font-bold my-52 mx-3 sm:mx-7 md:mx-16 text-left text-white">
          <h1>

            Empower 20 million Africans
          </h1>
           
           <h1 className='py-4'>
            to sustainably provide
            </h1>
   
   <h1>
            for themselves my 2023
   </h1>
            </div>
          </div>
        </div>
      </div>
 {/* create a vertical line and when hoverd it's horizontal */}
  


<div
 id="message"
 style={{
   backgroundImage: "url(/img/nature8.svg)",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   width: "100%",
   position: "relative",
   top: "10%",
 }}
 className='w-full max-w-6xl lg:max-w-7xl px-2 lg:px-6 py-16 lg:py-28 relative mx-auto'>
  <div className='hidden md:flex justify-end items-end'>
    <Image
    src='https://www.forafrika.org/wp-content/uploads/2022/08/Afrika-Thrive.jpg'
    height={400}
    width={750}
    className='rounded-xl'
    alt='old woman smiling'
    />
  </div>
  <div className='hidden md:flex justify-center max-h-96 w-full pt-4 items-center'>
    <Image
    src='https://www.forafrika.org/wp-content/uploads/2022/12/ForAfrika-Feeding.jpg'
    height={300}
    width={700}
    layout='fixed'
    className='rounded-xl'
    alt='a child eating'
    />
  </div>
<div className='md:absolute top-40'>
   <CardB />
</div>

<CompanyLogo />

</div>

<ImageSwipper />
<FactSection />
<div
 id="card"
 style={{
   backgroundImage: "url(/img/nature8.svg)",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   width: "100%",
   position: "relative",
   top: "10%",
 }}
 className='w-full max-w-6xl lg:max-w-7xl px-2 lg:px-6 py-16 lg:py-28 relative mx-auto'>

<CardY />
</div>

<BottomSection />

<Footer />

      
      </main>
    </>
  )
}

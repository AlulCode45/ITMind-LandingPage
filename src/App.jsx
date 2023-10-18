import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import headerBG from './assets/bg-header.png'
import BackgroundIdea from './components/BackgroundIdea'
import FirstSectionBg from './assets/first-section-bg2.png'
import ReyhanImage from './assets/reyhan.png'
import AlulImage from './assets/alul.png'


function App() {
  return (
    <>
      <header className='px-16 bg-cover h-[calc(100vh-140px)]' style={{
        background: `url("${headerBG}")`,
        backgroundSize: 'cover'
      }}>
        <Navbar />
        <Jumbotron className={'flex items-center mt-5'}>
          <div className="jumbotron-content w-3/5">
            <h1 className='text-white text-[55px] leading-[70px]'>We create changes in the world era from traditional to modern </h1>
            <p className='text-white mt-5 text-lg'>
              iTmind is an innovation that people don't think about properly, an organization based on forming a mindset where technology and humans unite to leap into the modern era in Indonesia towards Web 3.0 and Industrial Revolution 5.0.
            </p>
          </div>
        </Jumbotron>
      </header>

      <marquee className='text-white opacity-50 font-extrabold text-4xl mt-32'>
        <div className="flex gap-16">
          <img src="/assets/sponsors/1.png" alt="" className='h-5' />
          <img src="/assets/sponsors/2.png" alt="" className='h-5' />
          <img src="/assets/sponsors/3.png" alt="" className='h-5' />
          <img src="/assets/sponsors/4.png" alt="" className='h-5' />
          <img src="/assets/sponsors/5.png" alt="" className='h-5' />
          <img src="/assets/sponsors/6.png" alt="" className='h-5' />
          <img src="/assets/sponsors/7.png" alt="" className='h-5' />
          <img src="/assets/sponsors/8.png" alt="" className='h-5' />
        </div>
      </marquee>

      <main>
        <section className='py-12'>
          <img src={FirstSectionBg} className='absolute w-full -z-50 h-full' alt="" />
          <div className="grid grid-cols-2 gap-10 items-center px-16">
            <h3 className='text-white text-[40px]'>Join the tech community conversation! We are here to help you make your dreams come true.</h3>
            <h3 className='text-right text-white text-lg'>
              We are an organization committed to helping technology succeed. We offer a variety of services and support to help you get started, develop and increase your knowledge.
            </h3>
          </div>
        </section>

        <section className='my-32 px-16'>
          <BackgroundIdea
            title={'Lack of public interest and motivation to learn technology.'}
            problem={'PROBLEM #1'}
            desc={'There are still many people who consider technology to be something complicated and difficult to learn. As a result, they are reluctant to learn it and prefer to use technology passively, such as just playing games or watching videos.'}
            orientarion={'left'}
            imageLink={'/assets/image1.png'} />

          <BackgroundIdea
            title={"Society's traditional view of technology."}
            problem={'PROBLEM #2'}
            desc={'There are still some people who have a traditional view of technology, namely that technology can replace the role of humans. As a result, they are reluctant to use technology and prefer to do everything manually.'}
            orientarion={'right'}
            imageLink={'/assets/image2.png'} />

          <BackgroundIdea
            title={"Lack of public access to technology."}
            problem={'PROBLEM #3'}
            desc={'There are still many people living in remote or rural areas who do not have adequate access to technology. As a result, they do not have the opportunity to learn and use technology.'}
            orientarion={'left'}
            imageLink={'/assets/image3.png'} />

          <BackgroundIdea
            title={"Inadequate technological infrastructure in Indonesia."}
            problem={'PROBLEM #4'}
            desc={'There are still many areas in Indonesia that do not have adequate technological infrastructure, such as a fast and stable internet network. As a result, people in these areas have difficulty accessing and using technology.'}
            orientarion={'right'}
            imageLink={'/assets/image4.png'} />

          <BackgroundIdea
            title={"Lack of digital literacy programs from the government."}
            problem={'PROBLEM #5'}
            desc={"The government does not yet have an adequate digital literacy program to increase people's awareness and skills in using technology."}
            orientarion={'left'}
            imageLink={'/assets/image5.png'} />

          <BackgroundIdea
            title={"Lack of availability of experts in the field of technology."}
            problem={'PROBLEM #6'}
            desc={"There are still many regions in Indonesia that lack experts in the field of technology. As a result, people in these areas find it difficult to get help and guidance in using technology."}
            orientarion={'right'}
            imageLink={'/assets/image6.png'} />

        </section>

        <section className='mt-32 px-16 mb-32'>
          <h3>SHARING WITH US!</h3>
          <div className="grid grid-cols-2">
            <div className="reyhan text-white text-center">
              <img src={ReyhanImage} alt="" className='grayscale w-full' />
              <h4 className='text-2xl font-bold mt-4'>RAIHAN CAHTRA R.P.P</h4>
              <span className='text-xl'>Founder EX-SCIENCE & iTmind</span>
            </div>
            <div className="alul text-white text-center">
              <img src={AlulImage} alt="" className='grayscale h-[646.8px]' />
              <h4 className='text-2xl font-bold mt-4'>MUHAMMAD KHOYRON AHLAQUL F</h4>
              <span className='text-xl'>Co-Founder iTmind</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
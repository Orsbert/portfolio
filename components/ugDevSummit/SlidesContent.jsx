import React from "react";
import { getPortfolio } from "../../scripts/portfolioData";
import Image from "next/image";
import { motion } from "framer-motion";

const portfolioIds = ["molyslip", "o7ean3d", "toptear", "o7ean2d"];

export const SlidesContent = () => {
  return (
    <>
      <IntroSection />
      {portfolioIds.map((portfolioId) => (
        <SlideContent key={portfolioId} portfolioId={portfolioId} />
      ))}
    </>
  );
};

const SlideContent = ({ portfolioId }) => {
  const {
    title,
    hoverVideo: thumbnailVideo,
    fullVideo,
  } = getPortfolio(portfolioId);

  return (
    <section data-auto-animate>
      <section className=''>
        <div className='w-[40%]'>
          <video autoPlay loop muted className='rounded-xl overflow-hidden'>
            <source src={thumbnailVideo} type='video/mp4' />
          </video>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className='absolute bottom-0 right-0 h-full w-[40%] text-right flex flex-col'
        >
          <h2 className='fade-in'>{title}</h2>
          <BrandStamp />
        </motion.div>
      </section>
      <VideoBackground url={fullVideo} />
    </section>
  );
};

const IntroSection = () => {
  return (
    <section data-auto-animate>
      <div className='flex items-center gap-4 fragment fade-right	'>
        <Image
          className='rounded-full fade-right'
          data-auto-animate-id='orsbert-dp'
          src='/dp.png'
          height={100}
          width={100}
          alt=''
        />
        <div className='text-left flex flex-col justify-center'>
          <p className='' data-auto-animate-id='orsbert-name'>
            ORSBERT AYESIGYE
            <br />
            <span className='text-sm' data-auto-animate-id={"orsbert-email"}>
              ayesbert@gmail.com
            </span>
          </p>
        </div>
      </div>
      <p className='fragment'>
        I help brands & businesses design, develop, test, deploy and monitor
        web-based applications.
      </p>
    </section>
  );
};

const BrandStamp = () => {
  return (
    <div className='brand-stamp text-right flex flex-col justify-end'>
      <div className='text-left flex flex-col justify-center items-end'>
        <Image
          className='rounded-full fade-right '
          data-auto-animate-id='orsbert-dp'
          src='/dp.png'
          height={50}
          width={50}
          alt=''
        />
      </div>
    </div>
  );
};

const VideoBackground = ({ url }) => {
  return (
    <section
      data-auto-animate
      data-background-video={url}
      data-background-video-loop
      data-background-video-muted
    ></section>
  );
};

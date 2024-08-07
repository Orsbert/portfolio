import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ErrorPage from "next/error";
import { getPortfolio } from "../../scripts/portfolioData";
import { InlineIcon } from "@iconify/react";
import newTab from "@iconify/icons-icomoon-free/new-tab";
import { motion, useViewportScroll } from "framer-motion";
import { observer } from "mobx-react-lite";
import UserContext from "../../scripts/Store";
import { Icon } from "@iconify/react";
import bxArrowBack from "@iconify/icons-bx/bx-arrow-back";
import { NextSeo } from "next-seo";
import { Footer } from "../../components/Footer";

let scrollDirection = "down"; // 'down' || 'up'
let scrollYProgressValue = 0;

// @ts-ignore
export const ProjectHeader = observer(({ title }) => {
  const context = useContext(UserContext);
  const { stateScrollDirection } = context.user;

  // listen for changes in y postion change
  const { scrollYProgress } = useViewportScroll();

  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        const { stateScrollDirection } = context.user;

        const diff = Math.abs(latest - scrollYProgressValue);

        const scrollDiffThreshold = 0.02; // calibrating

        // compare with prev value && determine direction
        // if (diff > scrollDiffThreshold || stateScrollDirection === 'top') {
        // 	scrollDirection = (latest > scrollYProgressValue)? 'down': 'up'
        // }

        scrollDirection = latest === 0 ? "top" : latest < 0.4 ? "up" : "down";

        // update state if neccessary
        if (scrollDirection !== stateScrollDirection) {
          // only new
          context.setUser({ stateScrollDirection: scrollDirection });
        }

        // store value
        scrollYProgressValue = latest;
      }),
    [scrollDirection]
  );

  const headerTitleVariants = {
    top: {
      paddingTop: "60px",
    },
    up: {
      paddingTop: "0px",
      marginLeft: "5px",
    },
    down: {
      paddingTop: "0px",
      marginLeft: "5px",
      fontSize: "32px",
    },
  };

  const headerVariants = {
    top: {
      borderBottomWidth: "0px",
    },
  };

  return (
    <motion.div
      id='project-header'
      className='project-header'
      initial={"top"}
      animate={stateScrollDirection}
      variants={headerVariants}
      transition={{ type: "tween", ease: "linear" }}
    >
      <Link href='/#portfolio-list-heading'>
        <div className='button back-button' role='button' title={`close`}>
          <Icon icon={bxArrowBack} fontSize={36} />
        </div>
      </Link>
      <div className='title-wrapper sticky top-0'>
        <motion.div className='title'>{title}</motion.div>
      </div>
    </motion.div>
  );
});

export const ProjectContent = ({ data }) => {
  const hasVideo = data.videoId !== "";

  return (
    <div className='project-content container'>
      <span className='normal'>
        {data.description}
        <br />
      </span>
      <br />
      {hasVideo && (
        <div
          style={{
            height: "300px",
          }}
        >
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${data.videoId}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      )}
      {!hasVideo && (
        <div className='image-wrapper'>
          <Image
            src={data.thumbnail}
            layout='responsive'
            height={654}
            width={1920 * (654 / 1080)}
            alt={data.title}
          />
        </div>
      )}
      <span className='sub-heading'>On this Project</span>
      <ul className='container'>
        {data.informationList.map((text, i) => (
          <li className='normal' key={i}>
            {text} <br />
          </li>
        ))}
      </ul>
      <br />
      <span className='sub-heading'>Technical Sheet</span>
      <span className='normal'>Code technologies used in this project.</span>
      <br />
      <ul className='normal container'>
        {data.techUsed.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

const PortfolioProject = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    setIsReady(true);

    // codes using router.query
  }, [pid, router.isReady]);

  if (!isReady) return null;

  const data = getPortfolio(pid);

  // incase of an invalid $pid
  if (data === null) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <NextSeo
        title={data.title + " - Portfolio Project - Orsbert Ayesigye"}
        description={data.description}
      />
      <div className='portfolio-project'>
        <ProjectHeader
          // @ts-ignore
          title={data.title}
        />
        <ProjectContent data={data} />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioProject;

// pages/qr-landing.js

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

export default function QRLanding() {
  const [clicked, setClicked] = useState(false);
  const mailtoLink = `mailto:ayesbert@gmail.com?subject=Excited%20to%20Connect!&body=Hello%20Orsbert,%0D%0A%0D%0AI%20just%20visited%20your%20exhibition%20and%20was%20impressed%20by%20your%20work!%20I%20would%20love%20to%20learn%20more%20and%20explore%20how%20we%20can%20collaborate.%20Let's%20connect%20soon!%0D%0A%0D%0ABest%20regards`;

  const handleClick = () => {
    setClicked(true);
    window.location.href = mailtoLink;
    setTimeout(() => setClicked(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 p-4'>
      <motion.div
        className='flex flex-col items-center text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src='/dp.png'
          alt='Orsbert Ayesigye'
          width={150}
          height={150}
          className='rounded-full mb-4 shadow-lg'
        />
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>
          Orsbert Ayesigye
        </h1>
        <p className='text-lg text-gray-600 mb-6'>Creative Developer</p>
        <p className='text-lg text-gray-700 mb-8'>
          Let&apos;s connect! Click the button to send me an email.
        </p>
        <motion.button
          className='pulse bg-green-500 text-white text-2xl font-bold py-4 px-10 rounded-full shadow-lg focus:outline-none hover:bg-green-600 transition-all'
          whileHover={{
            scale: 1.1,
            rotate: 3,
          }}
          whileTap={{ scale: 0.9, rotate: -3 }}
          onClick={handleClick}
        >
          Connect with Me!
        </motion.button>
        {clicked && (
          <motion.div
            className='mt-4 text-lg text-green-600'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Email client opening... Thank you!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

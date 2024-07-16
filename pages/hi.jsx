// pages/qr-landing.js

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function QRLanding() {
  const [clicked, setClicked] = useState(false);
  const mailtoLink = `mailto:ayesbert@gmail.com?subject=Excited%20to%20Connect!&body=Hello%20Orsbert,%0D%0A%0D%0AI%20just%20visited%20your%20exhibition%20and%20was%20impressed%20by%20your%20work!%20I%20would%20love%20to%20learn%20more%20and%20explore%20how%20we%20can%20collaborate.%20Let's%20connect%20soon!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D`;

  const handleClick = () => {
    setClicked(true);
    window.location.href = mailtoLink;
    setTimeout(() => setClicked(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300'>
      <motion.div
        className='flex flex-col items-center text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-5xl font-bold text-gray-800 mb-4'>Hi there!</h1>
        <p className='text-xl text-gray-700 mb-8'>
          I'm thrilled you scanned my code. Let's connect!
        </p>
        <motion.button
          className='bg-green-500 text-white text-2xl font-bold py-4 px-10 rounded-full shadow-lg focus:outline-none'
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          onClick={handleClick}
        >
          Connect with Me!
        </motion.button>
        <p className='text-gray-700 mt-4'>
          Just click the button to send me an email.
        </p>
        {clicked && (
          <motion.div
            className='mt-4 text-lg text-green-600'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Email client opening... Thank you for reaching out!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

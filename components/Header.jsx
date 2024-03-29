import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import caretDownSquareFill from "@iconify/icons-bi/caret-down-square-fill";
import { MailButtonPlaceholder } from "./MailButton";

export const Header = () => {
  return (
    <motion.div className='header-wrapper'>
      <div className='name-wrapper'>
        <div className='avator'>
          <Image
            src='/dp.png'
            layout='responsive'
            height={200}
            width={200}
            alt=''
          />
        </div>
        <div>
          <span className='name'>ORSBERT AYESIGYE</span>
        </div>
      </div>
      <div className='occupation-big'>Creative Developer</div>
      <div className='occupation-explain'>
        <span className='green'>Crafting</span> captivating &amp; intuitive{" "}
        <span className='green'>
          interactive web interfaces, sites, and applications.
        </span>
      </div>
      <div className='bottom-buttons-wrapper'>
        <MailButtonPlaceholder tag={"header"} />
        <br />
        <div className='down-arrow-wrapper cursor-pointer hover:opacity-50 p-2 rounded-md'>
          <Icon icon={caretDownSquareFill} className='down-arrow' />
          &nbsp;&nbsp;
          <Link href='#portfolio-list-heading'>
            <div className='see-my-work'>see my work</div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

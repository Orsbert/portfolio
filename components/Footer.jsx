import React, { useRef } from "react";
import { MailButtonPlaceholder } from "./MailButton";
import { GithubLink, LinkedinLink, TwitterLink } from "./Nav";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className='flex flex-col justify-between'>
      <div>
        <div className='heading'>
          Wanna get in touch or talk about a project?
        </div>
        <div className='normal'>let’s talk</div>
        <div className='inline-block'>
          <MailButtonPlaceholder tag={"footer"} />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-2 w-full justify-between items-center p-2 pb-4  md:px-10'>
        <div>
          <Link
            href='/slides/ug-dev-summit'
            className='text-green-700 hover:text-white hover:underline transition-all'
          >
            My Exhibition Slides at Ug Dev Summit
          </Link>
        </div>
        <div className='flex items-centergap-2'>
          <TwitterLink />
          <LinkedinLink />
          <GithubLink />
        </div>
      </div>
    </footer>
  );
};

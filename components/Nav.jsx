import React from "react";
import { Icon } from "@iconify/react";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import linkedinIcon from "@iconify/icons-bi/linkedin";
import twitterFill from "@iconify/icons-akar-icons/twitter-fill";

export const TwitterLink = () => {
  return (
    <a
      title='Twitter profile'
      href='https://twitter.com/ayesigye_osbert'
      target='_blank'
      rel='noreferrer'
    >
      <Icon icon={twitterFill} className='nav-icon' />
    </a>
  );
};

export const LinkedinLink = () => {
  return (
    <a
      title='Connect on Linkedin'
      href='https://www.linkedin.com/in/orsbert-ayesigye-7b9716114/'
      target='_blank'
      rel='noreferrer'
    >
      <Icon icon={linkedinIcon} className='nav-icon' />
    </a>
  );
};

export const GithubLink = () => {
  return (
    <a
      title='Github profile'
      href='https://github.com/orsbert'
      target='_blank'
      rel='noreferrer'
    >
      <Icon icon={githubFill} className='nav-icon' />
    </a>
  );
};

export const Nav = () => {
  return (
    <nav>
      <div className='connect-icons flex'>
        <LinkedinLink />
        <TwitterLink />
        <GithubLink />
      </div>
    </nav>
  );
};

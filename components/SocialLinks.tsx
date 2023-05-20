import React from 'react';
import { Button } from 'reactstrap';
import { socialLinks } from '../portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.url && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={socialLinks.url}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-link" />
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" />
          </span>
        </Button>
      )}
      
      {socialLinks.hackerrank && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="hackerrank"
          href={socialLinks.hackerrank}
          target="_blank"
          rel="noopener"
          aria-label="Hackerrank"
        >
          <span className="btn-inner--icon">
            <FontAwesomeIcon
              icon={faHackerrank}
              style={{ fontSize: '36px', color: '#7cf961' }}
            />
          </span>
        </Button>
      )}
      {socialLinks.leetcode && (
        <Button
          className="btn-icon-only rounded-circle ml-1 bg-gray"
          color="leetcode"
          href={socialLinks.leetcode}
          target="_blank"
          rel="noopener"
          aria-label="leetcode"
        >
          <span className="btn-inner--icon">
            <Image src="/leetcode.svg" alt="LeetCode" width={30} height={30} />
          </span>
        </Button>
      )}
      {socialLinks.geeksforgeeks && (
        <Button
          className="btn-icon-only rounded-circle bg-white"
          color="geeksforgeeks"
          href={socialLinks.geeksforgeeks}
          target="_blank"
          rel="noopener"
          aria-label="geeksforgeeks"
        >
          <span className="btn-inner--icon ">
          <Image src="/geeksforgeeks.svg" alt="geeksforgeeks" width={32} height={32} />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;

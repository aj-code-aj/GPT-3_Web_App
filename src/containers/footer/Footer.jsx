import React from 'react';
import './footer.css';
import gpt_logo from '../../assets/GPT-3.svg';

const Footer = () => {
  return (
    <div className='gpt3_footer section_padding'>
      <div className='gpt3_footer-heading'>
        <h1 className='gradient_text'>
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className='gpt3_footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3_footer-links'>
        <div className='gpt3_footer-links_logo'>
          <img src={gpt_logo} />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gpt3_footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

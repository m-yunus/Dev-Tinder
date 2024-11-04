import React from "react";

const Footer = () => {
  return (
    <div className="h-auto px-2 py-4  md:py-4 bg-black  text-white">
      <div className="w-[90%] mx-auto">

      <div className="flex flex-wrap lg:min-w  justify-start gap-8 lg:gap-16">
        <div className="flex w-2/12">
          <div>
            <h6 className="font-bold text-white text-xl">Legal</h6>
            <ul className="flex flex-col font-medium mt-4 ">
              <li>Privacy</li>
              <li>Terms of Service</li>
              <li>Consumer Health Data Privacy</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Cookie Settings</li>
            </ul>
          </div>
        </div>
        <div className="flex w-2/12">
          <div>
            <h6 className="font-bold text-white  text-xl">Careers</h6>
            <ul className="flex flex-col font-medium mt-4">
              <li>Career Portal</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="flex w-2/12">
          <div>
            <h6 className="font-bold text-white text-xl">Support</h6>
            <ul className="flex flex-col font-medium mt-4">
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="flex w-2/12">
          <div>
            <h6 className="font-bold text-white text-xl">Company</h6>
            <ul className="flex flex-col font-medium mt-4">
              <li>About Us</li>
              <li>Blog</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Footer;

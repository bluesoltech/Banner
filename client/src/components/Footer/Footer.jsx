import React from 'react';
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { AiFillYoutube, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import visalogo from "../Footer/visalogo.png";
import disable from "../Footer/disable.png";


const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com/",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/company/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://twitter.com/",
    icon: <RiTwitterXFill className="group-hover:text-white w-4 h-5" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="container mx-auto px-4 py-4 md:py-6 lg:px-6">
        <div className="flex flex-wrap -mx-4 justify-between items-start md:items-center">
          <div className="container px-5 py-8 mx-auto flex items-center xl:flex-row flex-col gap-3">
            <div className="max-w-sm mx-auto">
              {/* contact */}
              <div className="flex flex-col space-y-5">
                <div className="flex items-center space-x-3 ">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="text-lg font-semibold hover:text-orange-400">Need to talk?</h3>
                    <p className="text-sm hover:text-orange-400">We're here 24x7</p>
                    <a href="tel:800-580-4489" className="text-blue-600 transition-colors hover:text-orange-400">800-580-4489</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="text-lg font-semibold hover:text-orange-400">Write to us</h3>
                    <p className="text-sm hover:text-orange-400">For your questions, we're just an email away.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">❓</span>
                  <div>
                    <h3 className="text-lg font-semibold hover:text-orange-400">Need help?</h3>
                    <p className="text-sm hover:text-orange-400">Find your answers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap xl:w-full">
              {/* Category */}
              <div className="sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Category</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Flags</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Step and Repeat Displays</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Banners</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Canopies</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Table Covers and Throws</a>
                  </li>
                </nav>
              </div>
              {/* Information */}
              <div className="sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Information</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Order Tracking</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">International Shipping</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Customer Reviews</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Special Offers</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Sitemap</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Safety Signs & Banners</a>
                  </li>
                </nav>
              </div>
              {/* Customer Service */}
              <div className="sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Customer Service</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Message from CEO</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Contact us</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Affiliate Program</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Areas of Service</a>
                  </li>
                </nav>
              </div>
              {/* Help Station */}
              <div className="sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Help Station</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">FAQs</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Return Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Free Design Proofs</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Shipping</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-400">Sample Kit</a>
                  </li>
                </nav>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="flex flex-col items-center p-4 rounded-[50%] shadow-md w-full max-w-xs mx-auto ">
              <h2 className="text-lg font-semibold text-gray-700">Customer Reviews</h2>
              <div className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-full">
                <p className="text-xl font-bold ml-8">81.6K</p>
                <div className="flex justify-center">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-sm">CERTIFIED REVIEWS</p>
              </div>
              <p className="text-xs text-gray-500 mt-4">Powered By BST</p>
            </div>

          </div>
          <div className="w-full flex-shrink-0 md:mx-0 mx-auto ml-[10px] md:text-[10 0px] ">
            <div>
              <p className="text-[13px] font-[400] text-textColor mt-4">
                Add us on social media?
              </p>
              <div className="flex items-center gap-5 mt-4">
                {socialLinks.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-orange-400 hover:border-none"
                  >
                    {link.icon}
                  </Link>
                ))}
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 ml-20 sm:flex-row flex-col sm:text-[10px]">
                  <p>Powerful shoppers</p>
                  <img src={disable} alt="disable" />
                </div>
              </div>
              <div className="mt-4 flex justify-start lg:justify-end ">
                <div className="">
                  <img src={visalogo} alt="visalogo" />
                </div>
              </div>
              <div className="text-center mt-5 text-[16px] sm:mt-7">
                © 2009-2024 example.com. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
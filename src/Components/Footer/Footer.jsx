import React from "react";

const footer = () => {
  return (
    <div className="bg-black px-5 md:px-20 pt-20 pb-7 md:grid grid-cols-7 gap-4">
      <div className="col-span-2 mb-5 md:mb-0">
        <p className="pb-4 text-2xl font-bold text-white">CS — Ticket System</p>
        <p className="text-gray-400 text-sm pr-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="mb-5 md:mb-0"> 
        <p className="pb-4 text-xl font-semibold text-white">Company</p>
        <ol className="space-x-4 text-gray-400">
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Contact Saled</li>
        </ol>
      </div>
      <div className="mb-5 md:mb-0">
        <p className="pb-4 text-xl font-semibold text-white">Services</p>
        <ol className="space-x-4 text-gray-400">
          <li>Products & Services</li>
          <li>Customer Stories</li>
          <li>Download Apps</li>
        </ol>
      </div>
      <div className="mb-5 md:mb-0">
        <p className="pb-4 text-xl font-semibold text-white">Information</p>
        <ol className="space-x-4 text-gray-400">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Join Us</li>
        </ol>
      </div >
      <div className="col-span-2 md:flex justify-center mb-5 md:mb-0">
        <div>
          <p className="pb-4 text-xl font-semibold text-white">Social Links</p>
          <ol className="space-x-4 text-gray-400">
            <li>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 bg-white rounded-4xl flex items-center justify-center">
                  <i className="fa-brands fa-x-twitter text-black"></i>
                </div>
                <p className="text-xl">@CS — Ticket System</p>
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 bg-white rounded-4xl flex items-center justify-center">
                  <i className="fa-brands fa-linkedin-in text-black"></i>
                </div>
                <p className="text-xl">@CS — Ticket System</p>
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 bg-white rounded-4xl flex items-center justify-center">
                  <i className="fa-brands fa-facebook-f text-black"></i>
                </div>
                <p className="text-xl">@CS — Ticket System</p>
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 bg-white rounded-4xl flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-black"></i>
                </div>
                <p className="text-xl">support@cst.com</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default footer;

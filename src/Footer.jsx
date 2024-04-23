import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple text-white border-t">
      <div className="container mx-auto  px-6 py-4 flex justify-between">
        <img className="h-12" src="./public/EdublendWhite.png" alt="Edublend Logo" />
        <div className="text-center my-auto text-gray-700">
          &copy; 2024 EduBlend. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

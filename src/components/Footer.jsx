import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-4 px-6 text-center border-t border-gray-700 text-sm mt-10">
      <p className="text-gray-400">
        This site is not a part of the Facebook website or Facebook Inc. 
        Additionally, this site is not endorsed by Facebook in any way. 
        FACEBOOK is a trademark of FACEBOOK, Inc.
      </p>
      <p className="text-gray-500 mt-2">
        &copy; {new Date().getFullYear()} Bomom Store. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

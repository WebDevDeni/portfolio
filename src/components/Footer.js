import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ArrowUpIcon } from "@heroicons/react/solid";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-center">
        <div className="flex items-center">
          <a
            href="#top"
            className="inline-flex items-center text-white hover:text-gray-300 py-2 pr-4">
            <ArrowUpIcon className="w-4 h-4 mr-1" />
            Back to Top
          </a>
        </div>
        <div className="flex-grow flex justify-center">
          <a
            href="https://www.instagram.com/denisijak/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 py-2 px-3"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.facebook.com/deni.sijak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 py-2 px-3"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/deni-%C5%A1ijak-841477b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 py-2 px-3"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
        <p className="text-white text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Deni's Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
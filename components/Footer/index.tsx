"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="text-gray-600">swati tiwari</p>
            <p className="ml-4 text-gray-600">© 2024</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

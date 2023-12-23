import Link from "next/link";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLogoSkype, IoMdMail  } from "react-icons/io";
import { FaFacebookSquare, FaInstagramSquare  } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 bg-[#373a57] pt-6 rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between">

        <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center border-0 border-b-2 md:border-b-0 py-6 px-4 rounded-lg">
          <h2 className="text-2xl">About Us</h2>
          <ul className="mt-4 space-y-2 h-full flex flex-col justify-center">
            <li>
              <Link
                className="block p-1 text-sky-500 hover:text-sky-300 transition-all duration-100 ease-in-out hover:translate-x-1"
                href="#"
              >
                About Nomads
              </Link>
            </li>
            <li>
              <Link
                className="block p-1 text-sky-500 hover:text-sky-300 transition-all duration-100 ease-in-out hover:translate-x-1"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="block p-1 text-sky-500 hover:text-sky-300 transition-all duration-100 ease-in-out hover:translate-x-1"
                href="#"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="block p-1 text-sky-500 hover:text-sky-300 transition-all duration-100 ease-in-out hover:translate-x-1"
                href="#"
              >
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center border-0 border-b-2 md:border-b-0 py-6 px-4 rounded-lg md:border-l-2">
          <h2 className="text-2xl">Get in Touch</h2>
          <ul className="mt-4 space-y-2 list-none h-full flex flex-col justify-center gap-2">
            <li className="text-sky-500 flex flex-row gap-4">
              <IoMdMail className="text-2xl" />
              <span>nomads@protonmail.me</span>
            </li>
            <li className="text-sky-500 flex flex-row gap-4">
              <FaSquarePhone className="text-2xl" />
              <span>+99699428264</span>
            </li>
            <li className="text-sky-500 flex flex-row gap-4">
              <IoLogoSkype className="text-2xl w-fit border border-sky-500 rounded p-0 m-0" />
              <span>skype/nomads</span>
            </li>
          </ul>
        </div>

        <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center border-0 py-6 px-4 rounded-lg md:border-l-2">
          <h2 className="text-2xl">Follow Us</h2>
          <ul className="mt-4 space-y-2 list-none h-full flex flex-col justify-center">
          <li>
              <Link
                className="p-1 text-sky-500 hover:text-sky-300 transition-all duration-100 ease-in-out hover:translate-x-1 flex gap-4"
                href="#"
              >
                <FaFacebookSquare className="text-2xl" />
                <span>Facebook</span>
              </Link>
            </li>
          <li>
              <Link
                className="p-1 text-sky-500 hover:text-sky-300 transition-all duration-100 ease-in-out hover:translate-x-1 flex gap-4"
                href="#"
              >
                <FaInstagramSquare className="text-2xl" />
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                className="p-1 text-sky-500 hover:text-sky-300 transition-all duration-100 ease-in-out hover:translate-x-1 flex gap-4"
                href="#"
              >
                <FaSquareXTwitter className="text-2xl" />
                <span>Twitter</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <p className="p-4 mt-6 bg-[#4B4670] text-center flex justify-between items-center gap-4">
        Copyright &copy; {year} Nomads Tourism Organization. All Rights
        Reserved. <span className='font-poller tracking-wider text-xl text-white md:px-4 md:text-2xl'>Nomads.</span>
      </p>
    </footer>
  );
};

export default Footer;

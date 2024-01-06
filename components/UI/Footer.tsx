import Link from "next/link";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLogoSkype, IoMdMail  } from "react-icons/io";
import { FaFacebookSquare, FaInstagramSquare  } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" bg-[#131C27] pt-6">
      <div className="flex flex-col md:flex-row md:justify-between">

        <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center border-0 border-b-2 mx-8 w-[300px] rounded-lg md:border-b-0 py-6 px-4">
          <h2 className="text-3xl font-abril font-semibold text-[#D9D9D9]">About Us</h2>
          <ul className="mt-4 space-y-2 h-full flex flex-col justify-center">
            <li>
              <Link
                className="block p-1 hover:text-[#6179ad] transition-all duration-100 ease-in-out hover:translate-x-1"
                href="#"
              >
                About Nomads
              </Link>
            </li>
            <li>
              <Link
                className="block p-1 hover:text-[#6179ad] transition-all duration-100 ease-in-out hover:translate-x-1"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="block p-1 hover:text-[#6179ad] transition-all duration-100 ease-in-out hover:translate-x-1"
                href="#"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="block p-1 hover:text-[#6179ad] transition-all duration-100 ease-in-out hover:translate-x-1"
                href="#"
              >
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center border-0 border-b-2 md:border-b-0 py-6 mx-8 w-[300px] rounded-lg md:border-l-2">
          <h2 className="text-3xl font-abril font-semibold text-[#D9D9D9]">Get in Touch</h2>
          <ul className="mt-4 space-y-2 list-none h-full flex flex-col justify-center gap-2">
            <li className=" flex flex-row gap-4">
              <IoMdMail className="text-2xl" />
              <span>nomads@protonmail.me</span>
            </li>
            <li className=" flex flex-row gap-4">
              <FaSquarePhone className="text-2xl" />
              <span>+99699428264</span>
            </li>
            <li className="flex flex-row gap-4">
              <IoLogoSkype className="text-2xl w-fit border border-[#6179ad] rounded p-0 m-0" />
              <span>skype/nomads</span>
            </li>
          </ul>
        </div>

        <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center border-0 py-6 px-4 mx-8 w-[300px] rounded-lg md:border-l-2">
          <h2 className="text-3xl font-abril font-semibold text-[#D9D9D9]">Follow Us</h2>
          <ul className="mt-4 space-y-2 list-none h-full flex flex-col justify-center">
          <li>
              <Link
                className="p-1 hover:text-[#6179ad] transition-all duration-100 ease-in-out hover:translate-x-1 flex gap-4"
                href="#"
              >
                <FaFacebookSquare className="text-2xl" />
                <span>Facebook</span>
              </Link>
            </li>
          <li>
              <Link
                className="p-1 hover:text-[#6179ad] transition-all duration-100 ease-in-out hover:translate-x-1 flex gap-4"
                href="#"
              >
                <FaInstagramSquare className="text-2xl" />
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                className="p-1 hover:text-[#6179ad] transition-all duration-100 ease-in-out hover:translate-x-1 flex gap-4"
                href="#"
              >
                <FaSquareXTwitter className="text-2xl" />
                <span>Twitter</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 mt-6 bg-[#101923] text-center flex justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
        Copyright &copy; {year} Nomads Tourism Organization. All Rights
        Reserved.
      </p>
        <Link href='/'> <h1 className='font-poller tracking-wider font-semibold text-3xl text-[#797DA5] md:px-4 md:text-4xl'>Nomads.</h1></Link>
      </div>
    </footer>
  );
};

export default Footer;

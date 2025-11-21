/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <section >
      <div className="container max-w-screen-lg mx-auto my-12 ">
        <div className="h-auto flex flex-col items-start justify-between px-8 sm:flex-row sm:px-0">
          <div className="flex flex-col items-start justify-start gap-2">
            <p className="text-3xl font-semibold tracking-wide">Contact Us</p>
            <div className="flex flex-row items-center justify-start gap-2">
              <FaEnvelope className="text-lg sm:text-xl" />
              <p className="text-lg text-center">info@vizzle.in</p>
            </div>
            <p className="font-baloo">
              We'd love to hear from you! <br /> Reach out with your queries or
              feedback.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-2xl">Get in touch...</p>
            <div className="flex flex-row items-start justify-start gap-2">
              <a
                href="https://www.instagram.com/vizzle.in/profilecard/?igsh=MXBleDQ4OG51c2t6cg=="
                className="transition hover:text-blue-500"
              >
                <FaInstagram className="w-10 h-10 text-xl sm:text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/vizzle.in/"
                className="transition hover:text-blue-500"
              >
                <FaFacebook className="w-10 h-10 text-xl sm:text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/vizzle-official/"
                className="transition hover:text-blue-500"
              >
                <FaLinkedin className="w-10 h-10 text-xl sm:text-2xl" />
              </a>
              <a
                href="https://x.com/Vizzle_in"
                className="transition hover:text-blue-500"
              >
                <FaXTwitter className="w-10 h-10 text-xl sm:text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center pt-10 font-baloo text-slate-700">
          Copyright © 2025 Vizzle - All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;

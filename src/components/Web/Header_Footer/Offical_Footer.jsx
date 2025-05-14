import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Components/Logo/Logo";
import FooterLinksBox from "./Components/Footer/FooterLinks";
export default function Offical_Footer() {
  const FooterLinks = useSelector((state) => state.footer.FooterLinks);
  return (
    <footer className="w-full h-fit bg-custom-800 flex flex-col items-center justify-center text-white px-3 py-1">
      <div className="w-full h-fit bg-custom-800 flex flex-col items-center justify-center text-white px-3 py-1">
        <div className="w-full h-fit flex flex-col gap-4 md:flex-row items-center justify-between px-2 py-4">
          <div id="one" className="grid grid-rows-2 md:grid-rows-1  gap-4 w-80">
            <div id="logo" className=" size-full">
              <div className="flex flex-col gap-2 items-center justify-center">
                <Logo
                  src="logo.png"
                  type="inText"
                  alt="Hope Institue Logo"
                  width={200}
                  height="auto"
                />
                <h1 className="text-center text-2xl py-2">
                  Hope Group Institute
                </h1>
              </div>
            </div>
            <div id="contact" className="grid grid-rows-4">
              <div
                id="address"
                className="w-full grid grid-cols-[20%_auto] gap-2 items-center"
              >
                <label htmlFor="address" className="text-custom-5 text-sm">
                  Address :{" "}
                </label>
                <a href="#" name="address" className="text-sm">
                  Goverment Grils Inter College, Lakhimpur-kheri
                </a>
              </div>
              <div
                id="phone"
                className="w-full grid grid-cols-[20%_auto] gap-2 items-center"
              >
                <label htmlFor="phone" className="text-custom-500 text-sm">
                  Phone :{" "}
                </label>
                <a href="#" name="phone" className="text-sm">
                  +91 1234567890
                </a>
              </div>
              <div
                id="email"
                className="w-full grid grid-cols-[20%_auto] gap-2 items-center"
              >
                <label htmlFor="email" className="text-custom-500 text-sm">
                  Email :{" "}
                </label>
                <a href="#" name="email" className="text-sm">
                  example@example.com
                </a>
              </div>
              <div
                id="founder"
                className="w-full grid grid-cols-[20%_auto] gap-2 items-center"
              >
                <label htmlFor="founder" className="text-custom-500 text-sm">
                  Founder :
                </label>
                <a href="#" name="founder" className="text-sm">
                  John Doe
                </a>
              </div>
            </div>
          </div>
          <div id="two" className=" flex gap-3">
            <FooterLinksBox links={FooterLinks} />
          </div>
        </div>
        <div id="Dev"></div>
      </div>
    </footer>
  );
}

import React from "react";

export default function FooterLinks({ links }) {
  return links.map((linkGroup, index) => (
    <div key={`${linkGroup[0]}div`}>
      <h1
        key={linkGroup[0]}
        className="text-md underline underline-offset-4 mb-2"
      >
        {linkGroup[0]}
      </h1>
      <ul className="text-sm" key={`${linkGroup[0]}List`}>
        {linkGroup.slice(1).map((link, linkIndex) => (
          <li
            key={linkIndex}
            className="relative py-0.5 text-sm px-0.5 hover:underline cursor-pointer underline-offset-2 before:ml-0.5 before:text-custom-5 before:content-['-'] before:text-2xl before:absolute before:-left-4 before:-top-2 hover:text-custom-5"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  ));
}

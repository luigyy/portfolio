import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className=" flex justify-between px-12 py-10 border-t  ">
      <div>
        <a
          href="#about"
          className="text-left border-b pb-1 text-sm text-zinc-600 border-zinc-500/50"
        >
          Contact
        </a>
      </div>
      <div>
        <p className="text-left text-sm text-zinc-500/80 ">
          © {new Date().getFullYear().toString()} Luigy Valverde. All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

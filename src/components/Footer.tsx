import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className=" flex justify-between px-12 py-10 border-t  ">
      <div></div>
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

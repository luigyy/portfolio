import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div>
      <img src="pic-profile.jpg" className="w-16 rounded-full px-12" alt="Me" />
    </div>
  );
};

export default Hero;

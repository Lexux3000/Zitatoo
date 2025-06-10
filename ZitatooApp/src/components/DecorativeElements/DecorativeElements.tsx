import React from "react";
import DecorativeDot from "./DecorativeDot";

const DecorativeElements: React.FC = () => {
  return (
    <>
      <DecorativeDot top="20" left="20" size="4" />
      <DecorativeDot top="40" right="32" size="2" animationDelay="0.5s" />
      <DecorativeDot bottom="32" left="16" size="3" animationDelay="1s" />
      <DecorativeDot bottom="20" right="20" size="2" animationDelay="1.5s" />
    </>
  );
};

export default DecorativeElements;

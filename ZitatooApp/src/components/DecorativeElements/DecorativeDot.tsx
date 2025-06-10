import React from "react";
import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

interface DecorativeDotProps extends BoxProps {
  animationDelay?: string;
  size?: string | number;
}

const DecorativeDot: React.FC<DecorativeDotProps> = ({
  animationDelay,
  size = "2",
  ...props
}) => {
  return (
    <Box
      position="absolute"
      w={size}
      h={size}
      bg="pink.400"
      borderRadius="full"
      opacity="0.6"
      animation="pulse 2s infinite"
      animationDelay={animationDelay}
      {...props}
    />
  );
};

export default DecorativeDot;

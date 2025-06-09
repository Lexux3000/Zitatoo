import React from 'react';
import { Box } from '@chakra-ui/react';

const SmokeBackground: React.FC = () => {
  return (
    <Box position="absolute" inset="0" opacity="0.3">
      <Box
        position="absolute"
        top="20"
        left="10"
        w="96"
        h="96"
        bg="gray.600"
        borderRadius="full"
        filter="blur(48px)"
        opacity="0.2"
        animation="pulse 2s infinite"
      />
      <Box
        position="absolute"
        top="40"
        right="20"
        w="80"
        h="80"
        bg="gray.500"
        borderRadius="full"
        filter="blur(48px)"
        opacity="0.15"
        animation="pulse 2s infinite"
        animationDelay="1s"
      />
      <Box
        position="absolute"
        bottom="20"
        left="33%"
        w="72"
        h="72"
        bg="gray.700"
        borderRadius="full"
        filter="blur(48px)"
        opacity="0.1"
        animation="pulse 2s infinite"
        animationDelay="2s"
      />
    </Box>
  );
};

export default SmokeBackground;
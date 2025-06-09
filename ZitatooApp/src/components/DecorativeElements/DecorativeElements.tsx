import React from 'react';
import { Box } from '@chakra-ui/react';

const DecorativeElements: React.FC = () => {
  return (
    <>
      <Box
        position="absolute"
        top="20"
        left="20"
        w="4"
        h="4"
        bg="pink.400"
        borderRadius="full"
        opacity="0.6"
        animation="pulse 2s infinite"
      />
      <Box
        position="absolute"
        top="40"
        right="32"
        w="2"
        h="2"
        bg="pink.300"
        borderRadius="full"
        opacity="0.8"
        animation="pulse 2s infinite"
        animationDelay="0.5s"
      />
      <Box
        position="absolute"
        bottom="32"
        left="16"
        w="3"
        h="3"
        bg="pink.500"
        borderRadius="full"
        opacity="0.7"
        animation="pulse 2s infinite"
        animationDelay="1s"
      />
      <Box
        position="absolute"
        bottom="20"
        right="20"
        w="2"
        h="2"
        bg="pink.400"
        borderRadius="full"
        opacity="0.6"
        animation="pulse 2s infinite"
        animationDelay="1.5s"
      />
    </>
  );
};

export default DecorativeElements;
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      position="relative"
      zIndex={10}
      textAlign="center"
      py={8}
      color="gray.400"
      fontSize="sm"
    >
      <Text>&copy; 2025 Zi-Tattoo Studio. Všechna práva vyhrazena.</Text>
    </Box>
  );
};

export default Footer;
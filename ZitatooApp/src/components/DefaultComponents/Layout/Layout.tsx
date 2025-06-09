import React from 'react';
import { Box } from '@chakra-ui/react';
import SmokeBackground from '../../SmokeBackground/SmokeBackground';
import DecorativeElements from '../../DecorativeElements/DecorativeElements';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box 
      minH="100vh" 
      bg="black" 
      color="white" 
      position="relative" 
      overflow="hidden"
    >
      <SmokeBackground />
      <Box as="main" position="relative" zIndex={10}>
        {children}
      </Box>
      <DecorativeElements />
      <Footer />
    </Box>
  );
};

export default Layout;
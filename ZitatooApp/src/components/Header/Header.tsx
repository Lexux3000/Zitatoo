import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Link,
} from '@chakra-ui/react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Header: React.FC = () => {
  return (
    <Flex justify="space-between" align="center" p={4}>
      <Box>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <Link href="/">
            ZI-TATTOO
          </Link>
        </Heading>
      </Box>

      <Box>
        <HamburgerMenu />
      </Box>
    </Flex>
  );
};

export default Header;
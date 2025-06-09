import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl" px={6}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="80vh"
        textAlign="center"
      >
        {/* Main Title */}
        <VStack padding={8} mb={12}>
          <Heading
            as="h1"
            size={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            letterSpacing="wider"
          >
            ZI-TATTOO
          </Heading>
          
          <Box
            w="full"
            h="1px"
            bgGradient="linear(to-r, transparent, white, transparent)"
          />
          
          <Text
            color="pink.300"
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="widest"
            textTransform="uppercase"
          >
            Blackwork, vodovky, abstraktní, barevné prvky
          </Text>
        </VStack>

        {/* Studio Photo Section */}
        <Box
          bg="gray.100"
          color="black"
          p={16}
          mb={12}
          borderRadius="lg"
          shadow="2xl"
          maxW="2xl"
          w="full"
        >
          <VStack padding={4}>
            <Heading size={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              FOTKA STUDIA
            </Heading>
            <Box
              w="full"
              h="48"
              bg="gray.200"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="gray.500" fontSize="lg">
                Studio Photo Coming Soon
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Address */}
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          letterSpacing="widest"
          textTransform="uppercase"
          color="gray.300"
          mb={12}
        >
          Najdete nás na Kramářově 19, Přerov 750 02
        </Text>

        {/* Contact Buttons */}
        <HStack padding={4} flexWrap="wrap" justify="center">
          <Button
            bg="pink.500"
            color="white"
            _hover={{ bg: "pink.600" }}
            px={8}
            py={3}
            borderRadius="lg"
            fontWeight="semibold"
            shadow="lg"
            onClick={() => navigate('/contact')}
          >
            Kontakt
          </Button>
          <Button
            variant="outline"
            borderColor="pink.500"
            color="pink.500"
            _hover={{ bg: "pink.500", color: "white" }}
            px={8}
            py={3}
            borderRadius="lg"
            fontWeight="semibold"
            onClick={() => navigate('/portfolio')}
          >
            Portfolio
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Home;
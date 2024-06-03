import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex as="nav" w="100%" p={4} bg="blue.500" color="white" align="center">
      <Box fontWeight="bold" fontSize="xl">
        MyApp
      </Box>
      <Spacer />
      {isMobile ? (
        <IconButton aria-label="Menu" icon={<FaBars />} />
      ) : (
        <Box>
          <Text as="a" href="#" mx={2}>
            Home
          </Text>
          <Text as="a" href="#" mx={2}>
            About
          </Text>
          <Text as="a" href="#" mx={2}>
            Contact
          </Text>
        </Box>
      )}
    </Flex>
  );
};

const Index = () => {
  return (
    <Container maxW="container.md" p={0}>
      <Navbar />
      <Flex direction="column" justify="center" align="center" height="calc(100vh - 64px)">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
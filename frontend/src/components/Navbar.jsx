import {
  Text,
  Container,
  Flex,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          md: "row",
        }}
        flexDirection={"row"}
      >
        <Link to="/">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
          >
            Title
          </Text>
        </Link>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button colorScheme="teal" variant="solid">
              <FaPlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <IoSunnySharp />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

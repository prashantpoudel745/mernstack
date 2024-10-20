import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../src/store/product";
const Createpage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();

  const { createProduct } = useProductStore();
  const handleAddproduct = async () => {
    console.log(newProduct);
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };
  return (
    <ChakraProvider>
      <Box
        w="400px"
        p="4"
        m="auto"
        mt="10"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        boxShadow="md"
      >
        <Text textAlign={"center"} fontSize={40} fontWeight={500}>
          Create Products
        </Text>
        <VStack spacing={4} padding={10}>
          <Input
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            placeholder="Enter product name"
          />
          <Input
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            type="number"
            placeholder="Enter price"
          />
          <Input
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            placeholder="Enter image URL"
          />
          <Button
            colorScheme="teal"
            width="full"
            type="submit"
            onClick={handleAddproduct}
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};
export default Createpage;

import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Button,
  Text,
  useColorModeValue,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../store/product.js";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedproduct, setUpdatedProduct] = useState(product);
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteProduct, updateProduct } = useProductStore();
  const handleUpdateproduct = async (id, updatedproduct) => {
    const { success, message } = await updateProduct(
      product._id,
      updatedproduct
    );
    onClose();
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
  };
  const handleDeleteproduct = async () => {
    const { success, message } = await deleteProduct(product._id);
    console.log(success, message);
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
  };
  return (
    <Box
      shadow={"md"}
      rounded={"md"}
      py={1}
      height={"full"}
      width={280}
      bg={bg}
      overflow={60}
      transition={"0.3s"}
      _hover={{ transform: "scale(1.1)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt="image"
        h={40}
        w={80}
        objectFit={"cover"}
        rounded={"lg"}
      />
      <Box textAlign={"center"}>
        <Heading as="h3" size={"md"}>
          <Text>{product.name}</Text>
        </Heading>
      </Box>
      <Text
        textAlign={"center"}
        fontWeight={"semibold"}
        fontSize={"xl"}
        color={textColor}
        py={2}
      >
        <Text>{product.price}</Text>
      </Text>
      <HStack justifyContent={"space-evenly"}>
        <IconButton onClick={onOpen} icon={<FaEdit />} colorScheme="blue" />

        <IconButton
          onClick={() => {
            handleDeleteproduct(product._id);
          }}
          icon={<MdDelete />}
          colorScheme="red"
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4} padding={5}>
                <Input
                  name="name"
                  value={updatedproduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedproduct,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter product name"
                />
                <Input
                  name="price"
                  value={updatedproduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedproduct,
                      price: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="Enter price"
                />
                <Input
                  name="image"
                  value={updatedproduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedproduct,
                      price: e.target.value,
                    })
                  }
                  placeholder="Enter image URL"
                />
              </VStack>{" "}
            </ModalBody>

            <ModalFooter justifyContent={"space-between"} px={16} pb={10}>
              <Button
                colorScheme="orange"
                onClick={() => {
                  handleUpdateproduct(product._id, updatedproduct);
                }}
              >
                Update Product
              </Button>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>
    </Box>
  );
};

export default ProductCard;

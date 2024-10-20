import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../src/store/product";
import ProductCard from "../src/components/ProductCard";
const Homepage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);
  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={5}>
        <Text fontSize="4xl" fontWeight="semibold">
          Current Products
        </Text>
        {products.length === 0 && (
          <Text fontSize="2xl" fontWeight="semibold" textAlign={"center"}>
            No Products Found 😭
            <Link to={"/create"}>
              <Text
                as={"span"}
                fontSize={"2xl"}
                px={3}
                _hover={{ textDecoration: "underline", color: "blue" }}
              >
                Create new Product
              </Text>
            </Link>
          </Text>
        )}
        {products.length > 0 && (
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={50}>
            {products.map((product) => (
              <Box
                key={product._id}
                height="300px"
                width="250px"
                rounded={"md"}
              >
                <ProductCard  key={product._id} product={product} />
              </Box>
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
};

export default Homepage;

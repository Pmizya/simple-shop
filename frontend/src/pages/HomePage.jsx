import { Container, VStack, Text, SimpleGrid, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
    const { fetchProducts, products } = useProductStore()

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    console.log("products", products)

    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={12}>
                <Box textAlign="center">
                    <Text
                        fontSize={{ base: "36", md: "48" }}
                        fontWeight="800"
                        bgGradient="linear(to-r, purple.400, pink.400, orange.400)"
                        bgClip="text"
                        textAlign="center"
                        mb={4}
                        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                        letterSpacing="tight"
                    >
                        Current Products 🚀
                    </Text>
                    <Text
                        fontSize="lg"
                        color="gray.600"
                        _dark={{ color: "gray.300" }}
                        maxW="600px"
                        mx="auto"
                        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                    >
                    </Text>
                </Box>

                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3
                    }}
                    spacing={8}
                    w="full"
                >
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </SimpleGrid>

                {products.length === 0 && (
                    <Box
                        textAlign="center"
                        py={16}
                        px={8}
                        borderRadius="2xl"
                        border="2px dashed"
                        borderColor="gray.200"
                        _dark={{ borderColor: "gray.700",  bg: "gray.800"}}
                        bg="gray.50"
                    >
                        <Text 
                            fontSize="6xl" 
                            mb={4}
                        >
                            📦
                        </Text>
                        <Text 
                            fontSize="xl" 
                            fontWeight="600" 
                            color="gray.600"
                            _dark={{ color: "gray.300" }}
                            mb={2}
                            fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                        >
                            No products found
                        </Text>
                        <Text
                            fontSize="md"
                            color="gray.500"
                            _dark={{ color: "gray.400" }}
                            mb={6}
                        >
                            Start by adding your first product to the store
                        </Text>
                        <Link to="/create">
                            <Text 
                                as="span" 
                                color="purple.500" 
                                fontWeight="600"
                                fontSize="lg"
                                _hover={{ 
                                    textDecoration: "underline",
                                    color: "purple.600"
                                }}
                                transition="all 0.2s"
                            >
                                Create your first product →
                            </Text>
                        </Link>
                    </Box>
                )}
            </VStack>
        </Container>
    )
}

export default HomePage
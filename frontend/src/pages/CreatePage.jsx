import { Container, Box, Heading, VStack, Input, Button, useColorModeValue, useToast, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    })

    const { createProduct } = useProductStore()
    const toast = useToast()

    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct)
        if(!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
                duration: 4000,
            })
        } else{
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true,
                duration: 4000,
            })
        }
        setNewProduct({name: "", price:"", image:""})
    }

    return (
        <Container maxW="container.sm" py={12}>
            <VStack spacing={12}>
                <Box textAlign="center">
                    <Heading 
                        as="h1" 
                        size="2xl" 
                        mb={4}
                        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                        fontWeight="800"
                        bgGradient="linear(to-r, purple.400, pink.400, orange.400)"
                        bgClip="text"
                        letterSpacing="tight"
                    >
                        Create New Product ✨
                    </Heading>
                </Box>

                <Box
                    w="full" 
                    bg={useColorModeValue("white", "gray.800")}
                    p={8} 
                    borderRadius="2xl" 
                    shadow="xl"
                    border="1px"
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                    <VStack spacing={6}>
                        <Input 
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                            size="lg"
                            borderRadius="xl"
                            border="2px"
                            borderColor="gray.200"
                            _focus={{
                                borderColor: "purple.400",
                                boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)"
                            }}
                            _dark={{
                                borderColor: "gray.600",
                                _focus: {
                                    borderColor: "purple.400"
                                }
                            }}
                            fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                        />
                        <Input 
                            placeholder="Price"
                            type="number"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                            size="lg"
                            borderRadius="xl"
                            border="2px"
                            borderColor="gray.200"
                            _focus={{
                                borderColor: "purple.400",
                                boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)"
                            }}
                            _dark={{
                                borderColor: "gray.600",
                                _focus: {
                                    borderColor: "purple.400"
                                }
                            }}
                            fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                        />
                        <Input 
                            placeholder="Image URL"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                            size="lg"
                            borderRadius="xl"
                            border="2px"
                            borderColor="gray.200"
                            _focus={{
                                borderColor: "purple.400",
                                boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)"
                            }}
                            _dark={{
                                borderColor: "gray.600",
                                _focus: {
                                    borderColor: "purple.400"
                                }
                            }}
                            fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                        />
                        <Button 
                            colorScheme="purple" 
                            onClick={handleAddProduct} 
                            w="full"
                            size="lg"
                            borderRadius="xl"
                            fontWeight="600"
                            fontSize="lg"
                            py={6}
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "xl"
                            }}
                            transition="all 0.2s"
                            fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                        >
                            Add Product 🚀
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage
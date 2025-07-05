import { Container, Button, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { PlusSquareIcon } from "@chakra-ui/icons"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"

const Navbar = () => {
    const { colorMode, toggleColorMode} = useColorMode()

    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={20}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base:"column",
                    sm:"row"
                }}
                py={4}
            >
                <Text
                    fontSize={{ base: "24", sm: "32"}}
                    fontWeight={"900"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, purple.400, pink.400, orange.400)"}
                    bgClip={"text"}
                    letterSpacing={"wider"}
                    fontFamily={"'Inter', 'Segoe UI', system-ui, sans-serif"}
                    _hover={{
                        bgGradient: "linear(to-r, cyan.400, blue.500, purple.600)",
                        transition: "all 0.3s ease"
                    }}
                >
                    <Link to={"/"}> Product Store 🛒 </Link>
                </Text>

                <HStack spacing={3} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button
                            colorScheme="purple"
                            variant="solid"
                            size="md"
                            leftIcon={<PlusSquareIcon />}
                            borderRadius="xl"
                            fontWeight="600"
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            }}
                            transition="all 0.2s"
                        >
                            Add Product
                        </Button>
                    </Link>
                    <Button 
                        onClick={toggleColorMode}
                        variant="ghost"
                        size="md"
                        borderRadius="xl"
                        _hover={{
                            bg: colorMode === "light" ? "purple.50" : "purple.900",
                            transform: "scale(1.05)"
                        }}
                        transition="all 0.2s"
                    >
                        {colorMode === "light" ? <IoMoon size="20" /> : <LuSun size="20" />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar
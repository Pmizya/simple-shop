import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack,
	Badge,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);

	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");
	const borderColor = useColorModeValue("gray.200", "gray.700");

	const { deleteProduct, updateProduct } = useProductStore();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Box
			bg={bg}
			borderRadius="2xl"
			overflow="hidden"
			shadow="md"
			border="1px"
			borderColor={borderColor}
			transition="all 0.3s ease"
			_hover={{ 
				transform: "translateY(-8px)", 
				shadow: "2xl",
				borderColor: "purple.300"
			}}
			position="relative"
		>
			<Box position="relative" overflow="hidden">
				<Image 
					src={product.image} 
					alt={product.name} 
					h={56} 
					w="full" 
					objectFit="cover"
					transition="all 0.3s ease"
					_hover={{ transform: "scale(1.05)" }}
				/>
				<Badge
					position="absolute"
					top={3}
					right={3}
					colorScheme="purple"
					variant="solid"
					borderRadius="full"
					px={3}
					py={1}
					fontSize="sm"
					fontWeight="600"
				>
					New
				</Badge>
			</Box>

			<Box p={6}>
				<VStack align="start" spacing={4}>
					<Heading 
						as="h3" 
						size="md" 
						color={useColorModeValue("gray.800", "white")}
						fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
						fontWeight="700"
						lineHeight="1.2"
					>
						{product.name}
					</Heading>

					<HStack justify="space-between" w="full">
						<Text 
							fontWeight="800" 
							fontSize="2xl" 
							color="purple.500"
							fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
						>
							${product.price}
						</Text>
						
						<HStack spacing={2}>
							<IconButton 
								icon={<EditIcon />} 
								onClick={onOpen} 
								colorScheme="blue"
								variant="ghost"
								size="sm"
								borderRadius="lg"
								_hover={{
									bg: "blue.50",
									transform: "scale(1.1)"
								}}
								_dark={{
									_hover: { bg: "blue.900" }
								}}
								transition="all 0.2s"
							/>
							<IconButton
								icon={<DeleteIcon />}
								onClick={() => handleDeleteProduct(product._id)}
								colorScheme="red"
								variant="ghost"
								size="sm"
								borderRadius="lg"
								_hover={{
									bg: "red.50",
									transform: "scale(1.1)"
								}}
								_dark={{
									_hover: { bg: "red.900" }
								}}
								transition="all 0.2s"
							/>
						</HStack>
					</HStack>
				</VStack>
			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay backdropFilter="blur(10px)" />
				<ModalContent borderRadius="2xl" mx={4}>
					<ModalHeader 
						fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
						fontWeight="700"
						fontSize="xl"
					>
						Update Product
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder="Product Name"
								name="name"
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
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
							/>
							<Input
								placeholder="Price"
								name="price"
								type="number"
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
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
							/>
							<Input
								placeholder="Image URL"
								name="image"
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
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
							/>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="purple"
							mr={3}
							onClick={() => handleUpdateProduct(product._id, updatedProduct)}
							borderRadius="xl"
							fontWeight="600"
							_hover={{
								transform: "translateY(-2px)",
								boxShadow: "lg"
							}}
							transition="all 0.2s"
						>
							Update Product
						</Button>
						<Button 
							variant="ghost" 
							onClick={onClose}
							borderRadius="xl"
							_hover={{
								bg: "gray.100"
							}}
							_dark={{
								_hover: { bg: "gray.700" }
							}}
						>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default ProductCard;
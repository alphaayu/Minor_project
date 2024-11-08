// src/components/Sidebar.jsx
import { Box, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      bg="teal.500"
      w="200px"
      p="4"
      color="white"
      position="fixed"
      h="100%"
    >
      <VStack spacing="4" align="start">
        <Box fontSize="2xl" fontWeight="bold" mb="8">
          cofactr
        </Box>
        <Link as={RouterLink} to="/dashboard" style={{ textDecoration: 'none' }}>
          Dashboard
        </Link>
        <Link as={RouterLink} to="/orders" style={{ textDecoration: 'none' }}>
          Orders
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import mockData from '../mockData.js';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Input, Flex } from '@chakra-ui/react';
import Pagination from './Pagination';

const ProductTable = () => {
  const [data, setData] = useState(mockData);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    setData(
      mockData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box 
      p={5} 
      className="product-table-container"
      bg="#e0f2f1"  // Light green background
      color="#388e3c" // Dark green text color
    >
      <Flex mb={4} justify="flex-end">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          width="300px"
          bg="#a5d6a7" // Light green input background
          color="#ffffff" // White text color
          borderColor="#388e3c" // Green border
          _hover={{ borderColor: "#1b5e20" }} // Darker green on hover
          _focus={{ borderColor: "#1b5e20", boxShadow: "0 0 3px 2px #1b5e20" }} // Darker green on focus
        />
      </Flex>
      <Table 
        variant="simple" 
        sx={{ 
          tableLayout: "auto", 
          width: "100%", 
          borderCollapse: "collapse" 
        }}
        bg="white" // White background for the table
      >
        <Thead>
          <Tr bg="#388e3c"> {/* Dark green header background */}
            {['Product Name', 'Category', 'SKU', 'Date', 'Quantity', 'Promise Date', 'Customers', 'Status'].map((header, index) => (
              <Th 
                key={index} 
                color="white" 
                p={4} 
                textAlign="center"
                fontWeight="bold"
              >
                {header.toUpperCase()}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((item) => (
            <Tr 
              key={item.id} 
              _hover={{ bg: "#e8f5e9" }} // Light green hover effect
              transition="background-color 0.2s ease-in-out"
            >
              <Td textAlign="center">{item.name}</Td>
              <Td textAlign="center">{item.category}</Td>
              <Td textAlign="center">{item.sku}</Td>
              <Td textAlign="center">{item.date}</Td>
              <Td textAlign="center">{item.quantity}</Td>
              <Td textAlign="center">{item.promiseDate}</Td>
              <Td textAlign="center">{item.customer}</Td>
              <Td textAlign="center">{item.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justify="center" mt={4}>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / itemsPerPage)}
          onPageChange={paginate}
          sx={{
            '.page-item .page-link': {
              backgroundColor: '#388e3c', // Green background for pagination buttons
              color: '#ffffff', // White text
              borderRadius: '4px',
              padding: '8px 12px',
              margin: '0 4px',
              transition: 'background-color 0.2s ease-in-out',
            },
            '.page-item.active .page-link': {
              backgroundColor: '#1b5e20', // Darker green for active page
              color: '#ffffff', // White text
            },
            '.page-item .page-link:hover': {
              backgroundColor: '#66bb6a', // Lighter green on hover
              color: '#ffffff',
            },
          }}
        />
      </Flex>
    </Box>
  );
};

export default ProductTable;

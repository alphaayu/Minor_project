// src/components/Order.jsx
import React from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import AddOrderModal from './AddOrderModal'; // Import the AddOrderModal component
// import BackorderRate from './BackorderRate'; // Import the BackorderRate component
import OrdersTable from './OrdersTable'; // Import the OrdersTable component

const Order = () => {
  // useDisclosure hook to manage the modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <h1>Orders</h1>
      {/* Button to open the modal */}
      <Button colorScheme="teal" onClick={onOpen}>
        Add New Order
      </Button>

      {/* AddOrderModal component with isOpen and onClose props */}
      <AddOrderModal isOpen={isOpen} onClose={onClose} />

      {/* BackorderRate component */}
    

      {/* OrdersTable component */}
      <OrdersTable />

      {/* Your other order-related components and content */}
    </div>
  );
};

export default Order;

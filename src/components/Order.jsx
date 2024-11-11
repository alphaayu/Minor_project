 import React, { useState } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import AddOrderModal from './AddOrderModal';
import OrdersTable from './OrdersTable';
import mockData from "../mockData.jsx";

const Order = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [orders, setOrders] = useState(mockData);

  // Function to add a new order to the orders list
  const addNewOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <div>
      <h1>Orders</h1>
      <Button colorScheme="teal" onClick={onOpen}>
        Add New Order
      </Button>

      <AddOrderModal isOpen={isOpen} onClose={onClose} addNewOrder={addNewOrder} />

      <OrdersTable orders={orders} />
    </div>
  );
};

export default Order;
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import mockData from "../mockData.jsx";

const getColorScheme = (action) => {
  switch (action) {
    case "Cancelled":
      return "red";
    case "Pending":
      return "yellow";
    case "Ship Order":
    case "View Shipments":
      return "green";
    default:
      return "gray";
  }
};

const getActionLabel = (status) => {
  switch (status) {
    case "Cancelled":
      return "Cancelled";
    case "Pending":
      return "Pending";
    case "Shipped":
      return "View Shipments";
    default:
      return "Ship Order";
  }
};

const OrdersTable = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Product Items</Th>
        <Th>Items No</Th>
        <Th>Incoming</Th>
        <Th>Category</Th>
        <Th>Date</Th>
        <Th>Quantity</Th>
        <Th>Price</Th>
        <Th>Paid</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      {mockData.map((order, index) => (
        <Tr key={index}>
          <Td>{order.productItems}</Td>
          <Td>{order.itemsNo}</Td>
          <Td>{order.incoming}</Td>
          <Td>{order.category}</Td>
          <Td>{order.date}</Td>
          <Td>{order.quantity}</Td>
          <Td>{order.price}</Td>
          <Td>{order.paid ? "✓" : "✗"}</Td>
          <Td>
            <Button colorScheme={getColorScheme(order.action)}>
              {getActionLabel(order.action)}
            </Button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default OrdersTable;

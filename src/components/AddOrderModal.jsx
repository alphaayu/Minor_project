// src/components/AddOrderModal.jsx
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  // useDisclosure,
} from "@chakra-ui/react";

const AddOrderModal = ({ isOpen, onClose }) => {
  const initialRef = React.useRef();
  const [formData, setFormData] = useState({
    productItems: "",
    itemsNo: "",
    incoming: "",
    category: "",
    date: "",
    quantity: "",
    price: "",
    paid: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form data:", formData);
    onClose();
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Product Items</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Product Items"
              name="productItems"
              value={formData.productItems}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Items No</FormLabel>
            <Input
              placeholder="Items No"
              name="itemsNo"
              value={formData.itemsNo}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Incoming</FormLabel>
            <Input
              placeholder="Incoming"
              name="incoming"
              value={formData.incoming}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Input
              placeholder="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input
              placeholder="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Quantity</FormLabel>
            <Input
              placeholder="Quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <Input
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Paid</FormLabel>
            <Input
              placeholder="Paid"
              name="paid"
              value={formData.paid}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddOrderModal;

// import React from 'react';


// const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li key={number} className="page-item">
//             <a onClick={() => paginate(number)} href="#!" className="page-link">
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;


import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Flex justify="center" align="center" mt={4}>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        mr={2}
      >
        Previous
      </Button>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          mx={1}
          onClick={() => handlePageChange(index + 1)}
          variant={index + 1 === currentPage ? 'solid' : 'outline'}
          colorScheme={index + 1 === currentPage ? 'blue' : 'gray'}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        ml={2}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;

import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const dummy = [
  {
    img: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/CataloguetemplateKOOVS_1_-06_a88e071b-7938-4eda-8d07-8e61c01e0d57.jpg?v=1680003786&width=360",
    title: "Koovs Disc sweatShirt",
    size: "S",
    color: "Grey",
    price: "1,290.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/CataloguetemplateKOOVS_1_-06_a88e071b-7938-4eda-8d07-8e61c01e0d57.jpg?v=1680003786&width=360",
    title: "Koovs Disc sweatShirt",
    size: "S",
    color: "Grey",
    price: "1,290.00",
  },
];
const Cartpage = () => {
const [cartdata,setCartdata] =  useState([])
  const {_id} = useSelector((state)=> state.Auth.currentUser)

const getcartdata = async(id)=>{
try {
  let res = await axios.get(`http://localhost:8080/cart/${id}`)
 setCartdata(res.data)  
} catch (error) {
  console.log(error)
}
}

const deletecartdata = async(id)=>{
  try {
     await axios.get(`http://localhost:8080/cart/delete/${id}`)
   getcartdata(_id)  
  } catch (error) {
    console.log(error)
  }
  }

useEffect(()=>{
  getcartdata(_id)
},[])
  return (
    <Box>
      <Heading
        fontWeight="400"
        fontSize="2rem"
        lineHeight="1.8rem"
        marginBottom={"20px"}
      >
        Shopping Cart
      </Heading>
      <Box display="flex" justifyContent="center">
        <Button
          type="link"
          style={{
            border: "none",
            cursor: "pointer",
            backgroundColor: "white",
            fontSize: "15px",
          }}
        >
          Home{" "}
        </Button>
        <p style={{ fontSize: "15px", marginTop: "9px" }}>
          <span style={{ marginRight: "15px" }}>&#62;</span> Your Shopping Cart
        </p>
      </Box>{" "}
      <Box>
        <TableContainer width={"80%"} margin="auto" marginTop={"100px"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>Qunatity</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummy && dummy.map((el) => {
                return (
                  <Tr>
                    <Td>
                      <Box display={"flex"} gap="10px">
                        <Image src={el.img} h="130px" />
                        <Box>
                          <Heading fontWeight={"600"} fontSize={"13px"}>
                            {el.title}
                          </Heading>
                          <Text fontSize={"12px"} color="grey">
                            <span style={{ fontWeight: "600" }}>SIZE : </span>
                            {el.size}
                          </Text>
                          <Text fontSize={"12px"} color="grey">
                            <span style={{ fontWeight: "600" }}>Brand : </span>
                            {el.color}
                          </Text>
                          <Button
                            size="xs"
                            textAlign={"left"}
                            backgroundColor={"white"}
                            onClick={()=> deletecartdata(el._id)}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    </Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Cartpage;

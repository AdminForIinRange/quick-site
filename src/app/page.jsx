import React from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
const page = () => {
  return (
    <>
      <Box w={"100%"} h={"100%"} bgColor={"#F6EFE5"}>
        <Navbar />

      
          <Hero />

      </Box>
    </>
  );
};

export default page;

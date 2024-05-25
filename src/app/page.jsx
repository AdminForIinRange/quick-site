import React from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
const page = () => {
  return (
    <>
     <Navbar />
     <Hero />
    </>
  );
};

export default page;

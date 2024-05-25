import React from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import OurStory from "@/components/ourStory/ourStory";
import OurMission from "@/components/ourMission/ourMission";
const page = () => {
  return (
    <>
      <Box w={"100%"} h={"100%"} bgColor={"#F6EFE5"}>
        <Navbar />

      
          <Hero />
          <OurStory />
          <OurMission />



      </Box>
    </>
  );
};

export default page;

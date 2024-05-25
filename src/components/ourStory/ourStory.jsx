import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
const OurStory = () => {
  return (
    <>
      <HStack
        w={"100%"}
        h={"100%"}
        px={[" 5", "15", "15", "20", "20"]}
        bgColor={"#F6EFE5"}
        flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap"]}
        mt={"250px"}
        justify={"center"}
        align={"start"}
        color={"#303030"}
      >
        <VStack
          align={["start", "start", "start", "start", "start"]}
          w={["80%", "70%", "50%", "60%", "40%"]}
          h={"100%"}
        >
          <Text
            fontFamily={"Playfair Display"}
            fontSize={["40px", "40px", "60px", "60px", "60px"]}
            fontWeight={"600"}
            textAlign={["start", "start", "start", "start", "start"]}
          >
            Our Story
          </Text>
          <br />
        
          <Text
            fontFamily={"Playfair Display"}
            fontSize={["16px", "16px", "20px", "20px", "20px"]}
            fontWeight={"light"}
          
            w={"95%"}
          >
            Transform Your Space was founded on the belief that everyone
            deserves a beautiful, functional home. 
          
          </Text>
<br />
          <Text
            fontFamily={"Playfair Display"}
            fontSize={["16px", "16px", "20px", "20px", "20px"]}
            fontWeight={"light"}
            w={"95%"}
          >
         
            With over 20 years of
            experience in the interior design industry, our founder, Jane Doe,
            has built a team of dedicated professionals who share her passion
            for creating inspiring living spaces.
          </Text>
        </VStack>
        <HStack  display={["block", "block", "block", "block", "block"]} px={["20px", "20px", "0px", "0px", "0px"]}>
          <Box
            mt={["25px", "25px", "0px", "0px", "0px"]}
            borderRadius={"25px"}
            w={["300px", "400px", "300px", "400px", "500px"]}
            h={["200px", "300px", "500px", "500px", "600px"]}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgImage={
              "https://source.unsplash.com/gray-fabric-loveseat-near-brown-wooden-table-3wylDrjxH-E"
            }
          ></Box>
        </HStack>
      
      </HStack>
    </>
  );
};

export default OurStory;

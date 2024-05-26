import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import React from "react";

const Service = () => {
  return (
    <>
      <HStack
        justify={"center"}
        align={"start"}
        w={"100%"}
        h={"100%"}
        mt={"100px"}
        px={[" 5", "15", "15", "20", "20"]}
      >
        <Text
          fontFamily={"Playfair Display"}
          fontSize={["40px", "40px", "60px", "60px", "60px"]}
          fontWeight={"600"}
          textAlign={["start", "start", "start", "start", "start"]}
        >
          Services
        </Text>
      </HStack>
      <HStack
        w={"100%"}
        h={"100%"}
        mt={"50px"}
        gap={"10px"}
        align={"start"}
        justify={"center"}
        px={[" 5", "15", "15", "20", "20"]}
      >
        <VStack justify={"center"} align={"start"} w={"100%"} h={"100%"}>
          <Text
            fontFamily={"Playfair Display"}
            fontSize={["30px", "30px", "50px", "50px", "50px"]}
            fontWeight={"400"}
            textAlign={"left"}
            
          >
            Custom Interior Design
          </Text>

          <Text
            fontFamily={"Playfair Display"}
            fontSize={["16px", "16px", "20px", "20px", "20px"]}
            fontWeight={"light"}
      
            textAlign={"left"}
          >
            We offer personalized interior design services tailored to your
            specific needs and preferences. From modern minimalism to classic
            elegance, our designers work closely with you to create a space that
            reflects your style.
          </Text>
        </VStack>

        <HStack  >
          <Box
            borderRadius={"25px"}
            w={"500px"}
            h={"200px"}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgImage={
              "https://source.unsplash.com/black-and-white-wooden-table-and-chairs-wRzBarqn3hs"
            }
          ></Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Service;

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <>
      <HStack
        w={"100%"}
        h={"100%"}
        px={[" 5", "15", "15", "20", "20"]}
        bgColor={"#F6EFE5"}
        flexWrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        mt={"50px"}
        justify={"center"}
        align={"start"}
        color={"#303030"}
      >
        <VStack
          align={["center", "center", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
        >
          <Text
            fontFamily={"Playfair Display"}
            fontSize={["40px", "40px", "60px", "80px", "95px"]}
            fontWeight={"600"}
            textAlign={["center", "center", "start", "start", "start"]}
          >
            Imagine, Evaluate and Transform
          </Text>
          <Text
            fontFamily={"Playfair Display"}
            fontSize={["12px", "16px", "20px", "20px", "26px"]}
            fontWeight={"light"}
            fontStyle={"italic"}
          >
            Premier Home Interior Design Services
          </Text>
        </VStack>
        <HStack px={["20px", "20px", "0px", "0px", "0px"]}>
          <Box
            mt={["25px", "25px", "0px", "0px", "0px"]}
            borderBottomRightRadius={"25px"}
            borderBottomLeftRadius={"25px"}
            borderTopRightRadius={"25px"}
            borderTopLeftRadius={["25px", "25px", "200px", "200px", "200px"]}
            w={["350px", "350px", "400px", "400px", "500px"]}
            h={["200px", "300px", "500px", "500px", "600px"]}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgImage={
              "https://source.unsplash.com/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q"
            }
          ></Box>
        </HStack>
      </HStack>

      
    </>
  );
};

export default Hero;

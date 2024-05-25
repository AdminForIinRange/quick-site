import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
const OurMission = () => {
  return (
    <>
      <HStack
        w={"100%"}
        h={"100%"}
        px={[" 5", "15", "15", "20", "20"]}
        bgColor={"#F6EFE5"}
        flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap"]}
        mt={"150px"}
        justify={"center"}
        align={"start"}
        color={"#303030"}
      >


<HStack  mr={"35px"} display={["none", "none", "block", "block", "block"]} px={["20px", "20px", "0px", "0px", "0px"]}>
          <Box
            mt={["25px", "25px", "0px", "0px", "0px"]}
            borderRadius={"25px"}
            w={["350px", "400px", "300px", "400px", "500px"]}
            h={["200px", "300px", "500px", "500px", "600px"]}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgImage={
              "https://source.unsplash.com/white-wooden-kitchen-island-and-cupboard-cabinets-near-glass-panel-door-AQl-J19ocWE"
            }
          ></Box>
        </HStack>
        <VStack
          align={["center", "center", "start", "start", "start"]}
          w={["80%", "70%", "50%", "60%", "40%"]}
          h={"100%"}
        >
          <Text
            fontFamily={"Playfair Display"}
            fontSize={["40px", "40px", "60px", "60px", "60px"]}
            fontWeight={"600"}
            textAlign={["start", "start", "start", "start", "start"]}
          >
           Our Mission
          </Text>
          <br />

          <Text
            fontFamily={"Playfair Display"}
            fontSize={["16px", "16px", "20px", "20px", "20px"]}
            fontWeight={"light"}
            w={"95%"}
          >
            Our mission is to transform your living space into a place that feels uniquely yours. We pride ourselves on our attention to detail, commitment to quality, and the ability to deliver results that exceed expectations.
          </Text>

         
        </VStack>
        <HStack  mr={["0px", "0px", "35px", "35px", "35px"]} display={["block", "block", "none", "none", "none"]} px={["20px", "20px", "0px", "0px", "0px"]}>
          <Box
            mt={["25px", "25px", "0px", "0px", "0px"]}
            borderRadius={"25px"}
            w={["350px", "400px", "300px", "400px", "500px"]}
            h={["200px", "300px", "500px", "500px", "600px"]}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgImage={
              "https://source.unsplash.com/white-wooden-kitchen-island-and-cupboard-cabinets-near-glass-panel-door-AQl-J19ocWE"
            }
          ></Box>
        </HStack>
      </HStack>
    </>
  );
};

export default OurMission;

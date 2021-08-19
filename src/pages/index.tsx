import { Divider, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        justify="center"
        direction="column"
        w="100%"
        maxWidth="1440px"
        mx="auto"
      >
        <Banner />
        <TravelTypes />
        <Divider w="90px" h="2px" alignSelf="center" bgColor="gray.800" />
        <Text mt="52px" fontSize="36px" fontWeight="medium" alignSelf="center">
          Vamos nessa?
        </Text>
        <Text mb="52px" fontSize="36px" fontWeight="medium" alignSelf="center">
          Então escolha seu continente
        </Text>
      </Flex>
    </>
  );
}

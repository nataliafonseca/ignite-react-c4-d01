import { Divider, Flex, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import api from "../services/api";

interface Continent {
  slug: string;
  name: string;
  subtitle: string;
  carouselImage: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
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
          Então escolha seu continente.
        </Text>
        <Carousel continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("continents");

  return {
    props: { continents: response.data },
  };
};

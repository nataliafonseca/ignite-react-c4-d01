import { Flex, Text, VStack } from "@chakra-ui/react";
import CocktailImg from "../../public/images/cocktail.svg";
import BuildingImg from "../../public/images/building.svg";
import EarthImg from "../../public/images/earth.svg";
import MuseumImg from "../../public/images/museum.svg";
import SurfImg from "../../public/images/surf.svg";

export function TravelTypes() {
  return (
    <Flex px="140px" mt="114px" mb="80px" justifyContent="space-between">
      <VStack direction="column" spacing="24px">
        <CocktailImg />
        <Text fontWeight="semibold" fontSize="1.5rem">vida noturna</Text>
      </VStack>
      <VStack direction="column" spacing="24px">
        <SurfImg />
        <Text fontWeight="semibold" fontSize="1.5rem">praia</Text>
      </VStack>
      <VStack direction="column" spacing="24px">
        <BuildingImg />
        <Text fontWeight="semibold" fontSize="1.5rem">moderno</Text>
      </VStack>
      <VStack direction="column" spacing="24px">
        <MuseumImg />
        <Text fontWeight="semibold" fontSize="1.5rem">classico</Text>
      </VStack>
      <VStack direction="column" spacing="24px">
        <EarthImg />
        <Text fontWeight="semibold" fontSize="1.5rem">e mais...</Text>
      </VStack>
    </Flex>
  );
}
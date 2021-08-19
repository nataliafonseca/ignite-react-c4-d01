import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import AirplaneImg from "../../public/images/Airplane.svg";

export function Banner() {
  return (
    <Flex
      bgImage="url('/images/Banner.png')"
      bgRepeat="no-repeat"
      w="100%"
      maxWidth="1440px"
      h="335px"
      px="140px"
      py="80px"
      direction="row"
      justifyContent="space-between"
    >
        <Box w="50%">
          <Text fontSize="2.25rem" fontWeight="medium" color="gray.50">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize="1.25rem" color="gray.50" mt="5">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <AirplaneImg />
    </Flex>
  );
}

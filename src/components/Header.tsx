import { Flex } from "@chakra-ui/react";
import Logo from "../../public/images/Logo.svg";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1440px"
      h="100px"
      mx="auto"
      align="center"
      justify="center"
    >
      <Logo />
    </Flex>
  );
}

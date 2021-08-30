import { Flex, Icon, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoChevronBack } from "react-icons/io5";
import Logo from "../../public/images/Logo.svg";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1440px"
      h="100px"
      mx="auto"
      align="center"
      pl="140px"
      pr="calc(140px + 32px)"
    >
      {asPath !== "/" && (
        <Link href="/">
          <a>
            <Icon as={IoChevronBack} fontSize="32" />
          </a>
        </Link>
      )}
      <Flex w="100%" justify="center">
        <Logo />
      </Flex>
    </Flex>
  );
}

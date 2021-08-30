import { Flex, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
  img: string;
  title: string;
}

export function ContinentBanner({ img, title }: ContinentBannerProps) {
  return (
    <Flex
      pos="relative"
    >
      <Flex
        h="500px"
        _before={{
          bgImage: img,
          bgSize: "100%",
          bgPosition: "center",
          bgRepeat: "no-repeat",
          content: '""',
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          filter: "brightness(0.7)",
          zIndex: -1,
        }}
      >
        <Heading color="white" mt="auto" mb="60px" ml="140px">
          {title}
        </Heading>
      </Flex>
    </Flex>
  );
}

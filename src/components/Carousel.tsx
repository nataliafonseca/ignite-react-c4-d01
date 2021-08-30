import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  return (
    <Flex mx="auto" h="450px" w="100%" maxW="1240px" direction="row" mb="40px">
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%", flex: "1" }}
      >
        <SwiperSlide>
          <Flex
            h="450px"
            _before={{
              bgImage: "/images/Slider/AfricaSlider.png",
              content: '""',
              pos: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              filter: "brightness(0.6)",
              zIndex: -1,
            }}
          >
            <Box mx="auto" alignSelf="center">
              <Link href="/africa">
                <a>
                  <Text
                    color="gray.50"
                    fontSize="48px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    Africa
                  </Text>
                  <Text
                    color="gray.50"
                    fontSize="24px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    O continente mais quente.
                  </Text>
                </a>
              </Link>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            h="450px"
            _before={{
              bgImage: "/images/Slider/AmericaSlider.png",
              content: '""',
              pos: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              filter: "brightness(0.6)",
              zIndex: -1,
            }}
          >
            <Box mx="auto" alignSelf="center">
              <Link href="/america">
                <a>
                  <Text
                    color="gray.50"
                    fontSize="48px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    América
                  </Text>
                  <Text
                    color="gray.50"
                    fontSize="24px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    O continente dos sonhos.
                  </Text>
                </a>
              </Link>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            h="450px"
            _before={{
              bgImage: "/images/Slider/EuropaSlider.png",
              content: '""',
              pos: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              filter: "brightness(0.6)",
              zIndex: -1,
            }}
          >
            <Box mx="auto" alignSelf="center">
              <Link href="/europa">
                <a>
                  <Text
                    color="gray.50"
                    fontSize="48px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    Europa
                  </Text>
                  <Text
                    color="gray.50"
                    fontSize="24px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    O continente mais antigo.
                  </Text>
                </a>
              </Link>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}

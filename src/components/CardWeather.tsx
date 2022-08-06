import {
  Stack,
  Box,
  Text,
  Center,
  Image,
  Badge,
  Heading,
  Wrap,
  Button,
  useToast,
} from "@chakra-ui/react";
import { IActual } from "../interfaces/Weather";
import { CgDetailsMore } from "react-icons/cg";

function CardWeather({ previsao }: { previsao: IActual }) {
  const toast = useToast();
  function emBreve() {
    toast({
      title: "This Feature only for PREMIUM users!",
      position: "top",
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
  }
  return (
    <>
      <Stack spacing={2} direction="row">
        <Wrap spacing="10px" justify="center">
          <Box padding="6" boxShadow="lg" minW="xs">
            <Center>
              <Heading
                display={"flex"}
                as="h1"
                size="4xl"
                bgGradient="linear(to-l, yellow.300, blue.100)"
                bgClip="text"
                isTruncated
              >
                {previsao.main?.temp.toPrecision(2)}°C
              </Heading>
            </Center>
            <Center>
              <Image
                src={`https://openweathermap.org/img/wn/${previsao.weather?.[0].icon}@2x.png`}
                alt={previsao.weather?.[0].description}
              />
            </Center>
            <Center>
              <Text> {previsao.weather?.[0].description}</Text>
            </Center>
          </Box>
          <Box padding="6" boxShadow="lg" minW="xs">
            <Box mb="5">
              <Heading as="h1">
                {previsao.name} &nbsp;
                <Badge variant="solid" colorScheme="green">
                  agora
                </Badge>
              </Heading>
              <p>
                {previsao.sys?.country} {previsao.coord?.lat} ,{" "}
                {previsao.coord?.lon}
              </p>
            </Box>
            <Box>
              <Text display={"flex"}>
                Thermal sensation : {previsao.main?.feels_like.toPrecision(2)}C°
              </Text>
              <Text display={"flex"}>
                Humidity : {previsao.main?.humidity.toPrecision(2)}%
              </Text>
              <Button
                leftIcon={<CgDetailsMore />}
                w="100%"
                marginTop="10"
                colorScheme="blue"
                variant="outline"
                onClick={() => emBreve()}
              >
                See more details
              </Button>
            </Box>
          </Box>
        </Wrap>
      </Stack>
    </>
  );
}

export default CardWeather;

import { Heading, IconButton, VStack, useColorMode, Link, Flex } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { store } from "./app/store";
import FormSearch from './components/FormSearch';
import CardWeather from './components/CardWeather';
import { useSelector } from "react-redux";
import { IWeatherState } from './interfaces/Weather';
import CardSkeleton from './components/CardSkeleton';

function App() {
  const loading = useSelector(
    (state : IWeatherState) => state.weatherWatch.loading
  );
  const actual = useSelector(
    (state : IWeatherState) => state.weatherWatch.actual
  );

  const { colorMode, toggleColorMode } = useColorMode();
    store.subscribe(() => {
        localStorage.setItem('city', store.getState().weatherWatch.city);
  });

  function getBody() {
    const eCity = Object.keys(actual).length > 0; 
    if(loading) {
      return <CardSkeleton />;
    } else {
      if(eCity) {
        return <CardWeather previsao={actual} />;
      } else {
        return null;
      }
    }
  }

  return (
    <VStack p={4} minH='100vh' pb={28}>
      <IconButton 
        aria-label='Trocar tema'
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound={true} 
        size='md'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />

      <Heading
        p='1'
        fontWeight='extrabold'
        size='xl'
        bgGradient='linear(to-l, teal.300, blue.500)'
        bgClip='text'
      >
        Weather's prediction HARII
      </Heading>

      <FormSearch />
      {getBody()}
    
      <Flex position='absolute' bottom='5'>
        <Link href='https://github.com/84harii' target='_blank' >
            <IconButton 
            aria-label='Github'
            icon={<FaGithub/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
        <Link href='https://www.instagram.com/harii.84/' target='_blank'>
            <IconButton 
            aria-label='Linkedin'
            icon={<FaLinkedin/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
        <Link href='https://www.instagram.com/harii.84/' target='_blank'>
            <IconButton 
            aria-label='Instagram'
            icon={<FaInstagram/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
        <Link href='https://www.instagram.com/harii.84/' target='_blank'>
            <IconButton 
            aria-label='Twitter'
            icon={<FaTwitter/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
        <Link href='https://www.instagram.com/harii.84/' target='_blank'>
            <IconButton
            aria-label='Facebook' 
            icon={<FaFacebook/>}
            isRound={true}
            size='md'
            m='1'
        /> 
        </Link>
      </Flex>
    </VStack>
  );
}

export default App;

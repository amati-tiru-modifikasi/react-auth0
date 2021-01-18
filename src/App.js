import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import CallBack from './components/CallBack';

function App(props) {

  let mainComponent =  '';
  switch (props.location) {
    case '':
      mainComponent = <Main />
      break;
    case 'secret':
      mainComponent = <Secret />
      break;
    case 'callback':
      mainComponent = <CallBack />
      break;
    default:
      mainComponent = <NotFound />
      break;
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra, {props.name}!
            </Link>
            {mainComponent}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

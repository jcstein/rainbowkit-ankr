import React from 'react';
import {
  ChakraProvider,
  Box,
  Link,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Link
              color="blue.5`00"
              href="https://ankr.com/protocol/public"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ankr Public RPCs
            </Link>
            <ConnectButton />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

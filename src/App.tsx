import { Box, Flex, Image } from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';
import logo from './logo.svg';

function App(): JSX.Element {
  return (
    <Box>
      <Flex align="center" justify="center">
        <Image w={10} h={10} src={logo} alt="logo" />
      </Flex>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
}

export default App;

import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Flex 
      flexDirection='column' 
      alignItems='center' 
      height='100vh' 
      width='100vw'
      bgColor='white'
      color='smokyBlack'
    >
      <Header /> 
      <Box
        position='absolute'
        top='100px'
        width='100vw'
        height='calc(100vh - 100px)'
        overflowY='scroll'
        padding='10px'
      >
        <Outlet /> 
      </Box>
    </Flex>
  )
}

export default App

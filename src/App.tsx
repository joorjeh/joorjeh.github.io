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
      color='battleshipGray'
    >
      <Header /> 
      <Box
        position='absolute'
        top='300px'
        width='100vw'
        height='calc(100vh - 300px)'
        overflowY='scroll'
        padding='40px'
      >
        <Outlet /> 
      </Box>
    </Flex>
  )
}

export default App

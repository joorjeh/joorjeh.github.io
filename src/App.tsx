import { Center, Flex } from '@chakra-ui/react';
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
      bgColor='smokyBlack'
      color='timberwolf'
    >
      <Header /> 
      <Center
        position='absolute'
        top='100px'
      >
        <Outlet /> 
      </Center>
    </Flex>
  )
}

export default App

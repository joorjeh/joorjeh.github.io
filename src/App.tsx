import { Box, Flex } from '@chakra-ui/react'
import './App.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Flex 
      flexDirection='column' 
      alignItems='center' 
      height='100vh' 
      width='100vw'
    >
      <Header /> 
      <Box
        position='absolute'
        top='100px'
      >
        <Outlet /> 
      </Box>
    </Flex>
  )
}

export default App

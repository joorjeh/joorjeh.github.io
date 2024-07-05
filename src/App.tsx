import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
	<Flex 
	  flexDirection='column' 
	  alignItems='center' 
	  justifyContent='center'
	  height='100vh' 
	  width='100vw'
	  bgColor='white'
	  color='jet'
	  fontFamily="Montserrat"
	  fontWeight={600}
	>
	  <Flex
		flexDirection='column'
		alignItems='center'
		width='50vw'
		height='100vh'
	  >
		<Header /> 
	  <Box
		  width='100%'
		  height='calc(100vh - 300px)'
		  overflowY='auto'
		  padding='40px'
		  sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
		>
		  <Outlet />
		</Box>
	  </Flex>
	</Flex>
  )
}

export default App


import { Box, Flex } from '@chakra-ui/react';
//import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <Flex 
            width='100%'
            height='100%'
            gap='10px'
            flexDirection='column'
            fontFamily='Montserrat'
            fontWeight={600}
        >
            <Box
              fontSize='40px'
              paddingBottom='20px'
            >
              {"<blog>"}
            </Box>
      <Flex
        gap='10px'
        height='100%'
        width='100%'
        flexDirection='column'
        fontSize='26px'
      >
        
      </Flex >
        </Flex >
    );
};

export default Articles;

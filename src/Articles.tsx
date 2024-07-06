
import post_20240605_a_post_title from './posts/post_20240605_a_post_title';
import { Box, Flex } from '@chakra-ui/react';

const Articles = () => {
    return (
	 	<Flex 
            width='100%'
			gap='10px'
			flexDirection='column'
		>
            <Box fontSize='40px'>
                blog
            </Box>
            <post_20240605_a_post_title />
        </Flex>
    );
};

export default Articles;

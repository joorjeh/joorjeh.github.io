
import APostTitle from './posts/APostTitle';
import { Box, Flex } from '@chakra-ui/react';

const Articles = () => {
    return (
	 	<Flex 
            width='100%'
			height='100%'
			gap='10px'
			flexDirection='column'
		>
            <Box 
				fontSize='40px'
				paddingBottom='30px'
			>
                blog
            </Box>
            <APostTitle />
        </Flex>
    );
};

export default Articles;

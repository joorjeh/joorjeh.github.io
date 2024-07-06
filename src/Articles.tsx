
import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
			<Flex
				gap='10px'
				height='100%'
				width='100%'
				flexDirection='column'
				fontSize='30px'
			>
				<Link key="APostTitle">A Post Title</Link>
				<Link key="AnotherPostTitle">Another Post Title</Link>
			</Flex>
        </Flex>
    );
};

export default Articles;

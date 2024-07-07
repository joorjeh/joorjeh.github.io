
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
                <Box>
              <Link 
                to="post/APostTitle"
                key="APostTitle"
                state={{
                  content: `# Post Title

## Section

Here is some text that tells about stuff!

\`\`\`
for i in range(5):
	print(i)
\`\`\`

## Anher Section

`
                }}
              >
                A Post Title
              </Link>
              <Box 
                fontSize = '16px' 
                fontStyle = 'italic'
                fontWeight = '400'
              > 
                Jun 5, 2024
              </Box >
          </Box>
      </Flex >
        </Flex >
    );
};

export default Articles;

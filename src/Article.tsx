import { Box, Flex, Image, Text } from "@chakra-ui/react"
import pepe from './assets/pepe_why.jpeg';

const Article = () => {
    return (
            <Flex
                borderTop='1px solid silver'
                gap='20px'
                padding='20px'
            >
                <Box marginRight='30px'>
                    <Text>Dec 12, 2023</Text>
                </Box>
                <Flex 
                    flexDirection='column'
                    justifyContent='center'
                >
                    <Text fontSize='40px'>
                        Function Calling With Llama
                    </Text>
                    <Text py='2'>
                        Building agentic systems with the power of the llama.
                    </Text>
                </Flex>
                <Image 
                    borderRadius='lg'
                    src={pepe} 
                    boxSize='250px' 
                    alt='pepe'
                    marginLeft='auto'
                />
            </Flex>
    )
}

export default Article;
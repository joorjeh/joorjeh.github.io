import { Flex, Text } from "@chakra-ui/react"
import Article from "./Article";

const Articles = () => {
    return (
        <Flex
            width='100%' 
            alignItems='center'
            justifyContent='center'
        >
            <Flex 
                width='60%'
                gap='10px'
                flexDirection='column'
            >
                <Text alignSelf='start' fontSize='40px' color='black'>Blog</Text>
                <Article />
            </Flex>
        </Flex>
    )
}

export default Articles;
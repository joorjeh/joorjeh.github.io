import { Flex } from "@chakra-ui/react"

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
                {/* <Text alignSelf='start' fontSize='40px' color='black'>Blog</Text>
                <Article /> */}
            </Flex>
        </Flex>
    )
}

export default Articles;
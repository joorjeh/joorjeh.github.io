import { Flex } from "@chakra-ui/react"
import CardWrapper from "./CardWrapper";

const Articles = () => {
    return (
        <Flex
            flexDirection='column'
            gap='10px'
        >
            <CardWrapper />    
            <CardWrapper />
            <CardWrapper />
        </Flex>
    )
}

export default Articles;
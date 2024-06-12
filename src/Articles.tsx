import { Flex, Grid } from "@chakra-ui/react"
import CardWrapper from "./CardWrapper";

const Articles = () => {
    return (
        <Flex
            width='100vw' 
            justifyContent='center'
        >
            <Grid
                templateColumns='repeat(3, 1fr)'
                gap='10px'
                alignContent='center'
            >
                <CardWrapper />
            </Grid>
        </Flex>
    )
}

export default Articles;
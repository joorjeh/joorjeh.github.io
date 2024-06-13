import { Flex, Grid } from "@chakra-ui/react"

const Articles = () => {
    return (
        <Flex
            width='100vw' 
            justifyContent='center'
        >
            <Grid
                templateColumns='repeat(2, 1fr)'
                gap={2}
            >
            </Grid>
        </Flex>
    )
}

export default Articles;
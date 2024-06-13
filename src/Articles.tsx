import { Flex, Grid } from "@chakra-ui/react"
import CardWrapper from "./CardWrapper";
import { Link } from "react-router-dom";

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
                <Link to="/">
                    <CardWrapper />
                </Link>
            </Grid>
        </Flex>
    )
}

export default Articles;
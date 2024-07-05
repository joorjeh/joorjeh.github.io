import { Flex, Box } from "@chakra-ui/react"

const Articles = () => {
    return (
		<Flex 
			width='100%'
			gap='10px'
			flexDirection='column'
		>
		 	<Box 
                fontSize='40px' 
            >
                blog
            </Box>
		</Flex>
    )
}

export default Articles;

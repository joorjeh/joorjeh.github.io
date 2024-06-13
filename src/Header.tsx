import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            height='300px'
            width='100%'
            padding='40px'
            boxSizing='border-box'
            position='fixed'
            fontWeight='bold'
            fontSize='20px'
            bgColor='silver'
        >
            <Flex
                width='100%'
            >
                <Box>dreamlurch</Box>
                <Box marginLeft='auto'>
                    <Breadcrumb spacing='10px' separator='/'>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Blog</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
            </Flex>
            <Box 
                fontSize='40px' 
                marginTop='auto'
                width='70%'
            >
                dreamlurch - glitches in the simulation
            </Box>
        </Flex>
    )
}

export default Header;
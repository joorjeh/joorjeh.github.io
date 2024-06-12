import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex
            height='100px'
            width='100vw'
            alignItems='center'
            padding='40px'
            boxSizing='border-box'
            position='fixed'
            fontWeight='bold'
            fontSize='20px'
        >
            <Box>dreamlurch</Box>
            <Box marginLeft='auto'>
            <Breadcrumb spacing='10px' separator='/'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#/about'>About</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            </Box>
        </Flex>
    )
}

export default Header;
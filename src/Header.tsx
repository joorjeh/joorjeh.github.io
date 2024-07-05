import { Box, Flex } from "@chakra-ui/react"
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

const Header = () => {
    return (
		<Flex
			flexDirection='column'
			alignItems='center'
			height='300px'
			padding='40px'
			boxSizing='border-box'
			fontWeight='bold'
			fontSize='20px'
			width='100%'
		>
            <Flex
                width='100%'
            >
                <Link to="/">joorjeh</Link>
                <Flex gap='10px' marginLeft='auto'>
                    <Link 
                        to='https://github.com/joorjeh'
                    >
                        <GitHubIcon sx={{"&:hover": { color: "black"}}} />
                    </Link>
                    <Link 
                        to='https://x.com/joorjeh'
                    >
                        <XIcon sx={{"&:hover": { color: "black"}}} />
                    </Link>
                </Flex>
            </Flex>
            <Box 
                fontSize='40px' 
                marginTop='auto'
                width='70%'
            >
                blog
            </Box>
        </Flex>
    )
}

export default Header;

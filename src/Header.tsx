import { Box, Flex } from "@chakra-ui/react"
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

const Header = () => {
    return (
		<Flex
			flexDirection='column'
			alignItems='center'
			height='100px'
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
                <Flex color='battleshipGray' gap='10px' marginLeft='auto'>
                    <Link 
                        to='https://github.com/joorjeh'
                    >
                        <GitHubIcon sx={{"&:hover": { color: "#322E2B"}}} />
                    </Link>
                    <Link 
                        to='https://x.com/joorjeh'
                    >
                        <XIcon sx={{"&:hover": { color: "#322E2B"}}} />
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header;

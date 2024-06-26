import { Box, Flex } from "@chakra-ui/react"
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import './Header.css';

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
            bgColor='whiteSmoke'
        >
            <Flex
                width='100%'
            >
                <Link to="/">dreamlurch</Link>
                <Flex gap='10px' marginLeft='auto'>
                    <Link 
                        to='https://github.com/dreamlurch'
                    >
                        <GitHubIcon className="g-icon" />
                    </Link>
                    <Link 
                        to='https://x.com/dreamlurch'
                    >
                        <XIcon />
                    </Link>
                </Flex>
            </Flex>
            <Box 
                fontSize='40px' 
                marginTop='auto'
                width='70%'
            >
                dreamlurch - glitches...
            </Box>
        </Flex>
    )
}

export default Header;
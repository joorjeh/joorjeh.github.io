import { Box, Flex } from "@chakra-ui/react"
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";

const Header = () => {
    const [stateChange, setStateChange] = useState<number>(0);

    const handleMouseEnter = (event: any) => {
        event.target.style.color = 'black';
        setStateChange(stateChange + 1); // to force rerender
    }

    const handleMouseLeave = (event: any) => {
        event.target.style.color = 'inherit';
        setStateChange(stateChange + 1); // to force rerender
    }

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
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        to='https://github.com/dreamlurch'
                    >
                        <GitHubIcon />
                    </Link>
                    <Link 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
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
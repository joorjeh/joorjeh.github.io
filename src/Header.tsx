import { Flex } from "@chakra-ui/react"
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex
      alignItems='center'
      height='100px'
      fontWeight='bold'
      fontSize='20px'
      fontFamily='Montserrat'
      width='100%'
    >
      <Link to="/">joorjeh</Link>
      <Flex color='battleshipGray' gap='10px' marginLeft='auto'>
        <Link
          to='https://github.com/joorjeh'
        >
          <GitHubIcon sx={{ "&:hover": { color: "#322E2B" } }} />
        </Link>
        <Link
          to='https://x.com/joorjeh'
        >
          <XIcon sx={{ "&:hover": { color: "#322E2B" } }} />
        </Link>
      </Flex>
    </Flex>
  )
}

export default Header;

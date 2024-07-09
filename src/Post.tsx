import Markdown from "markdown-to-jsx";
import { useLocation } from "react-router-dom";
import './Post.css';
import { Box, Flex } from "@chakra-ui/react";

// TODO add modifier for <code> blocks in Markdown with custom component
const Post = () => {
  const location = useLocation();
  const { content, date } = location.state;

  return (
    <>
      <Box
        fontStyle='italic'
        fontWeight='400'
        fontFamily='Montserrat'
      >
        {date}
      </Box>
      <Flex paddingRight='10px'>
        <Markdown>
          {content}
        </Markdown>
      </Flex>
    </>
  );
}

export default Post;


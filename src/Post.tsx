import Markdown from "markdown-to-jsx";
import { useLocation } from "react-router-dom";
import './Post.css';

// TODO add modifier for <code> blocks in Markdown with custom component
const Post = () => {
  const location = useLocation();
  const { content } = location.state;

  return (
    <Markdown>
      {content}
    </Markdown>
  );
}

export default Post;


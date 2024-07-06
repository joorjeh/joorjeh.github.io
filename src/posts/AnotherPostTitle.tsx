
import Markdown from 'markdown-to-jsx';
import './Post.css';

const AnotherPostTitle = () => {
    const content = `# Another Great Post
Wow much wisdom

## How did you know?
I just knew somehow.
`;
    return <Markdown>{content}</Markdown>;
};

export default AnotherPostTitle;


import Markdown from 'markdown-to-jsx';
import './Post.css';

const AnotherPostAeticle = () => {
    const content = `# Another Great Post
Wow much wisdom

## How did you know?
I just knew somehow.
`;
    return <Markdown>{content}</Markdown>;
};

export default AnotherPostAeticle;

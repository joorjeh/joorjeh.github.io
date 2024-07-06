
import Markdown from 'markdown-to-jsx';

const APostTitle = () => {
    const content = `# Post Title

## Section

Here is some text that tells about stuff!


## Anher Section

`;
    return <Markdown>{content}</Markdown>;
};

export default APostTitle;

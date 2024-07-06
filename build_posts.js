import fs from 'fs';
import path from 'path';

const postsDir = './posts';
let componentsImports = [];
let componentsList = [];

fs.readdirSync(postsDir).forEach(file => {
    const markdownContent = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const fileName = path.basename(file, '.md');
	const componentName = fileName.slice(8)
	const tsxContent = `
import Markdown from 'markdown-to-jsx';
import './Post.css';

const ${componentName} = () => {
    const content = \`${markdownContent}\`;
    return <Markdown>{content}</Markdown>;
};

export default ${componentName};
`;

    fs.writeFileSync(path.join('src/posts', `${componentName}.tsx`), tsxContent);

    componentsImports.push(`import ${componentName} from './posts/${componentName}';`);
    componentsList.push(`<${componentName} />`);
});

const articlesContent = `
${componentsImports.join('\n')}
import { Box, Flex } from '@chakra-ui/react';

const Articles = () => {
    return (
        <Flex 
            width='100%'
            height='100%'
            gap='10px'
            flexDirection='column'
        >
            <Box 
				fontSize='40px'
                paddingBottom='30px'
            >
                blog
            </Box>
            ${componentsList.join('\n')}
        </Flex>
    );
};

export default Articles;
`;

fs.writeFileSync(path.join('src', 'Articles.tsx'), articlesContent);


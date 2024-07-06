import fs from 'fs';
import path from 'path';

const postsDir = './posts';
let componentsImports = [];
let componentsList = [];
let componentNames = [];

function camelCaseToWords(input) {
    return input
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function(str) { return str.toUpperCase(); })
        .trim();
}

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
	componentNames.push(componentName);
});

const articlesContent = `
import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
			<Flex
				gap='10px'
				height='100%'
				width='100%'
				flexDirection='column'
				fontSize='30px'
			>
				${componentNames.map((name) => (
				  `<Link key="${name}">${camelCaseToWords(name)}</Link>`
				)).join('\n')}
			</Flex>
        </Flex>
    );
};

export default Articles;
`;

fs.writeFileSync(path.join('src', 'Articles.tsx'), articlesContent);


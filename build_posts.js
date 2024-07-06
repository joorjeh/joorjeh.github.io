import fs from 'fs';
import path from 'path';

const postsDir = './posts';
let componentsImports = [];
let componentsList = [];

fs.readdirSync(postsDir).forEach(file => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const fileName = path.basename(file, '.md');
    const tsxContent = `
import Markdown from 'markdown-to-jsx';

const ${fileName} = () => {
    return <Markdown>${content}</Markdown>;
};

export default ${fileName};
    `;

    fs.writeFileSync(path.join('src/posts', `${fileName}.tsx`), tsxContent);

    componentsImports.push(`import ${fileName} from './posts/${fileName}';`);
    componentsList.push(`<${fileName} />`);
});

const articlesContent = `
${componentsImports.join('\n')}
import { Box, Flex } from '@chakra-ui/react';

const Articles = () => {
    return (
	 	<Flex 
            width='100%'
			gap='10px'
			flexDirection='column'
		>
            <Box fontSize='40px'>
                blog
            </Box>
            ${componentsList.join('\n')}
        </Flex>
    );
};

export default Articles;
`;

fs.writeFileSync(path.join('src', 'Articles.tsx'), articlesContent);


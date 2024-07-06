import fs from 'fs';
import path from 'path';

const postsDir = './posts';

fs.readdirSync(postsDir).forEach(file => {
    if (path.extname(file) === '.md') {
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
    }
});

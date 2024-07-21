import fs from 'fs';
import path from 'path';

const postsDir = './posts';
let componentInfo = [];

function camelCaseToWords(input) {
  return input
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (str) { return str.toUpperCase(); })
    .trim();
}

function extractDate(inputString) {
  const dateStr = inputString.slice(0, 8);
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const monthName = months[parseInt(month) - 1];
  return `${monthName} ${parseInt(day)}, ${year}`;
}

fs.readdirSync(postsDir).forEach(file => {
  const markdownContent = fs.readFileSync(path.join(postsDir, file), 'utf-8');
  const fileName = path.basename(file, '.md');
  const componentDate = extractDate(fileName)
  const componentName = fileName.slice(8);

  componentInfo.push({
    name: componentName,
    date: componentDate,
    content: markdownContent,
  });
  componentInfo.reverse();
});

const articlesContent = `
import { Box, Flex } from '@chakra-ui/react';
//import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <Flex 
            width='100%'
            height='100%'
            gap='10px'
            flexDirection='column'
            fontFamily='Montserrat'
            fontWeight={600}
        >
            <Box
              fontSize='40px'
              paddingBottom='20px'
            >
              {"<blog>"}
            </Box>
      <Flex
        gap='10px'
        height='100%'
        width='100%'
        flexDirection='column'
        fontSize='26px'
      >
        ${componentInfo.map((info) => (
  `        <Box>
              <Link 
                to="post/${info.name}"
                key="${info.name}"
                state={{
                  date: "${info.date}",
                  content: \`${info.content.replace(/```/g, '\\`\\`\\`')}\`
                }}
              >
                ${camelCaseToWords(info.name)}
              </Link>
              <Box 
                fontSize = '16px' 
                fontStyle = 'italic'
                fontWeight = '400'
              > 
                ${info.date}
              </Box >
          </Box>`
)).join('\n')}
      </Flex >
        </Flex >
    );
};

export default Articles;
`;

fs.writeFileSync(path.join('src', 'Articles.tsx'), articlesContent);


import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react"
import pepe from './assets/pepe_why.jpeg';

const CardWrapper = () => {
    return (
            <Card 
                borderRadius='lg'
                height='120px'
                width='600px'
                bgColor='timberwolf'
                direction={{ sm: 'row' }}
            >
                <Image 
                    borderRadius='lg'
                    borderRightRadius='0'
                    src={pepe} 
                    boxSize='120px' 
                    alt="pepe"
                />
                <Stack>
                    <CardBody>
                        <Heading 
                            fontFamily='var(--chakra-fonts-body)' 
                            size='md'
                        >
                            Automating Business Processes
                        </Heading>
                        <Text py='2'>
                            Use LLMs and DL to automate your daily tasks
                            NIIIIIIIIIIICCCCCEEEE
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
    )
}

export default CardWrapper;
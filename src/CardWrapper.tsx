import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react"

const CardWrapper = () => {
    return (
            <Card 
                borderRadius='lg'
                height='200px'
                borderWidth='1px'
                bgColor='timberwolf'
            >
                <CardHeader>
                    <Heading fontFamily='var(--chakra-fonts-body)' size='lg'>Article</Heading>
                </CardHeader>
                <CardBody>
                    <Text>This is an article I wrote for you special!</Text>
                </CardBody>
            </Card>
    )
}

export default CardWrapper;
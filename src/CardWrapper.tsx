import { Button, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react"

const CardWrapper = () => {
    return (
        <Card 
            borderRadius='20px'
            height='200px'
        >
            <CardHeader>
                <Heading size='lg'>Article</Heading>
            </CardHeader>
            <CardBody>
                <Button colorScheme="teal">Button</Button>
                <Text>This is an article I wrote for you special!</Text>
            </CardBody>
        </Card>
    )
}

export default CardWrapper;
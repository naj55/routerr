import { ChakraProvider, Container, Flex, Text } from '@chakra-ui/react'
function pageNot() {
    return (

        <ChakraProvider >
            <Container>
                <Flex bg='gray.200' alignItems='center'  >
                    <Text fontSize='4xl' color='tomato'>sorry page Not found</Text>
                </Flex>
            </Container>
        </ChakraProvider>


    )
}

export default pageNot
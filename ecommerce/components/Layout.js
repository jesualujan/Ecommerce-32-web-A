import Head from 'next/head'
import {
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue
} from '@chakra-ui/react'


const Layout = ({children}) => {
  return (
    <div>
    <Head>
        <title>E-commerce App</title>
    </Head>
    
    <Box>
    { /* BOX ES COMO UN DIV EN CHAKRA UI */}
    <Flex
      bg={useColorModeValue('white', 'gray.600')}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderTop={1}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}
      >
      <Flex flex={{base:1}} justify={{base:'center', md: 'start'}}> 
        <Text 
        fontFamily={'heading'} 
        color={useColorModeValue('gray.800', 'white')}>Logo
        </Text>
      </Flex> 
        <Stack
         flex={{base:1, md: 0}}
         justify={'flex-end'}
         direction={'row'}
         spacing={6}
        >
          <Button
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
          >Sign In
          </Button>
          <Button
          display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            variant={'link'}
            href={'#'}
            bg={'pink.400'}
            _hover={{ bg: "pink.300" }}>
          Sign up</Button>
          </Stack> 
    </Flex>
   </Box>
   {children} {/* Aquí se renderiza el contenido anidado */}
    </div>
  )
}

export default Layout
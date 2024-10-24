import React from 'react'
import { useRouter } from 'next/router'
import { data } from '../../utils/data'
import {
    Container,
    SimpleGrid,
    Flex,
    Image,
    Heading,
    Stack,
    Box,
    Text,
    useColorModeValue,
    Button
} from '@chakra-ui/react'

const ProductPage = () => {
    const router = useRouter() // es un hook de next, me va permitir a mi moverme entre rutas
    const {id} = router.query
    const product = data.products.find((product) => product.id === parseInt(id))
    if (!product) {
        return <div>Product not found</div>
    }
  return (
    <Container maxW={'container.xl'} mt={2}>
        <SimpleGrid columns={[1,2]} spacing={2}>

            <Flex>
                <Image
                 src={`/images/${product.image}`}
                 rounded={'md'}
                 alt={product.title}
                 fit={'cover'}
                 align={'center'}
                 h={'100%'}
                 w={{base: '100%', sm:'400px', md:'500px', lg:'600px'}}
                />
            </Flex>

            <Stack spacing={{base: 6, md:10}}>
                <Box>
                    <Heading
                    fontWeight={600}
                    fontSize={{base: '2xl', sm: '4xl', lg:'3xl'}}
                    >
                        {product.title}
                    </Heading>
                    <Text 
                    color={useColorModeValue('gray.900' , 'gray.400')}
                    fontWeight={300}
                    fontSize={'2xl'}
                    >
                        {`$  ${product.price} USD`}
                    </Text>
                </Box>

                <Text
                 color={useColorModeValue('gray.500' , 'gray.300')}
                 fontSize={'lg'}
                 mb={'10'}
                >{product.description}
                </Text>
                
                <Flex alignItems={'end'}>
                    <Button
                    rounded={'md'} w={'full'} size={'lg'} py={'3'}
                    bg={useColorModeValue('gray.900' , 'gray.50')}
                    color={useColorModeValue('white' , 'gray.900')}
                    textTransform={'uppercase'}
                    _hover={{bg: 'green.400'}}
                    _focus={{boxShadow: 'outline'}}
                    >
                        Add to cart
                    </Button>
                </Flex>
            </Stack>


        </SimpleGrid>
    </Container>
  )
}

export default ProductPage
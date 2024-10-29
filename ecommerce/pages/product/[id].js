import React from 'react'
import { useRouter } from 'next/router'
// import { data } from '../../utils/data'
import db from '../../utils/db'
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
import Product from '../../models/Products'

const ProductPage = (props) => {
    const router = useRouter() // es un hook de next, me va permitir a mi moverme entre rutas
    const {id} = router.query
    const {product} = props
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

//Server-side proxy
// reenviar las solicitudes del cliente a los servidores correspondientes
// y luego devolver las respuestas de esos servidores al cliente.

export async function getServerSideProps(context){
    // Extrae los datos/parámetros de la URL desde el contexto 
    const {params} = context
    const {id} = params
    // conecta a la base datos
    await db.connect()
    //Busca un producto en la base de datos con el id proporcionado y lo convierte a un objeto de Javascript
    const product = await Product.findOne({id}).lean()
    // desconecta de la base de datos
    await db.disconnect()
   // devuelve el producto encontrado, como props para ser usado en el componente de la página
    return {
        props: {
            product: db.convertDocToObj(product)
        }
    }

}
export default ProductPage
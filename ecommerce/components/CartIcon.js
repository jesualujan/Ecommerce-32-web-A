import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Box,Text, IconButton, useColorMode} from '@chakra-ui/react'

const CartIcon = () => {
    const {cart} = useContext(CartContext) //consumimos el contexto 
    const {colorMode} = useColorMode() // hacemos uso del hook useColorMode para obtener el modo de color actual
    const hoverColor = {light: "gray.800" ,  dark: "gray.200"}
    const iconColor = {light: "gray.600" ,  dark: "gray.300"}
    const fontColor = {light: "gray.800" ,  dark: "gray.100"}
  return (
     <Box position={'relative'}>
        <IconButton
            aria-label='cart'
            icon={<Text fontSize={'2xl'}>🛒</Text>}
            color= {iconColor[colorMode]}
            _hover={{
                color: hoverColor[colorMode],
                transform: 'scale(1.2)'}}/>
        { cart.length > 0 &&(
        <Box
        position={'absolute'}
        top={0}
        right={0}
        bg={hoverColor[colorMode]}
        color={fontColor[colorMode]}
        rounded="sm"
        p={1}
        >
        <Text fontWeight={'bold'}>{cart.length}</Text>
        </Box>
        )}
     </Box>
  )
}

export default CartIcon
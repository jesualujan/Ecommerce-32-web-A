//? useReducer es un hook que nos permite manejar el estado de un 
//? componente de manera más eficiente.
import React, { useReducer, createContext, Children} from 'react'

// para este ejemplo vamos a usar un reducer para manejar el estado del carrito

// Estado inicial del carrito
const initialState = {
    cart: [],
}

// Función reductora para manejar las acciones del carrito
// -> ADD_TO_CART: Agregar un producto al carrito
// -> REMOVE_FROM_CART: Remover un producto del carrito

const cartReducer = (state, action) => {
    switch(action.type){
        // Añadir un producto al carrito
        case 'ADD_TO_CART':
            return {
                ...state, cart: [...state.cart, action.payload]
            }
        // Eliminar un producto del carrito
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
            // Devolver el estado actual si no se reconoce la acción
            default:
                return state
    }
}

//* 1) Crear el contexto para el carrito
  const CartContext = createContext() 

//* 2) Crear el provider para el carrito
   const CartProvider = ({children}) => {
    // Usar Reducer con la función cartReducer y el estado inicial initialState
    const [state, dispatch] = useReducer(cartReducer, initialState)

    // función para agregar un producto/item al carrito
    const addToCart = (item) => {
        dispatch({
         type: 'ADD_TO_CART',
         payload: item
        })
    }

    const removeFromCart = (item) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: item._id 
           })
    }

    return (
        <CartContext.Provider
         value={
            {
                state,
                addToCart,
                removeFromCart
            }
         }
        >
            {children}
        </CartContext.Provider>
    )
   }

   export { CartContext, CartProvider }
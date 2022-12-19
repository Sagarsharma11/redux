import {ADD_TO_CART,REMOVE_TO_CART} from '../constant'
export const addToCart =(data) =>{
    console.warn(`data ${data.name}, ${data.price}`)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart =(data) =>{
    console.log(data)
    return{
        type:REMOVE_TO_CART,
    }
}
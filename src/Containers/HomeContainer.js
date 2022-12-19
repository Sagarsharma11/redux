import React from 'react'
import Home from '../Compnents/Home'
import { connect, Connect } from 'react-redux'
import {addToCart,removeToCart} from '../Services/Actions/Action'

const mapStateToProp = state =>({
      data:state.cardItems
})

const mapDispatchToProps =dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProp,mapDispatchToProps)(Home)
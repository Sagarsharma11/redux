import React from 'react'
import Header from '../Compnents/Header'
import { connect, Connect } from 'react-redux'

const mapStateToProp = state =>({
      data:state.cardItems
})

const mapDispatchToProps =dispatch =>({})

export default connect(mapStateToProp,mapDispatchToProps)(Header)
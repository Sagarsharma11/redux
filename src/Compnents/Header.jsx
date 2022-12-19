import React from 'react'
import './Home.css'

function Header(props) {
    console.warn('home => ',props.data)
  return (
    <>
    <div className='cart'>
        cart: {props.data.length}
        <p style={{color:`blue`}}>

        </p>
    </div>

    </>
  )
}

export default Header

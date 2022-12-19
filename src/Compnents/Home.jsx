import React from 'react'
import './Home.css'

function Home(props) {
    console.warn('home => ',props)
  return (
    <>

    <div className="box">
        <div className='image-wrapper'>
            <img src="https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png"/>
        </div>
        <div className='description'>
                <p>iphone price : 1000$</p>
                <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone 13s'})}>Add to cart</button>
                <button style={{backgroundColor:'green', marginTop:'5px'}} onClick={()=>props.removeToCartHandler()}>Remove to cart</button>
        </div>
        
    </div>
    </>
  )
}

export default Home

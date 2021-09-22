import React from 'react'
import './Head.css'


var Funapp1=(props)=>{
    const {countcartItems}=props
    return(
        <header className="hell3 block center">
            <div>
                <a href="/">
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="/cart">
                    Cart
                    {countcartItems?(
                        <button className="badge">{countcartItems}</button>
                    ):("")}
                    </a> <a href="/signin">SignIn</a>
            </div>
        </header>
       
    )
}

export default Funapp1
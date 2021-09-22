import React from 'react'
import Product from './Product'
import "./Head.css"


var Funapp2=(props)=>{
    
    const {products,onAdd}=props
    return(
        <main className= "block col-2">
            <h1>Products</h1>
            <div className="hell3">
                {products.map((product)=>{
                    return <Product key={product.id} product={product} onAdd={onAdd}></Product>
                })}
            </div>

        </main>
    )
}

export default Funapp2
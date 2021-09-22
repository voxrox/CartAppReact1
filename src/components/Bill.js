import React from 'react'
import  Fade from 'react-reveal/Fade'


var Funapp3=(props)=>{
    const {billitems, onAdd,onRemove}=props
    const itemsPrice=billitems.reduce((a,c)=>a+c.price*c.qty,0)
    const taxprice=itemsPrice*0.14
    const shippingprice=itemsPrice>2000?0:50
    const totalprice=itemsPrice+taxprice+shippingprice
    return(
        <aside className= "block col-1">
            <h1>Bill items</h1>
            <div>{billitems.length===0 && <div>Cart is empty</div>}</div>
            {billitems.map((item)=>{
               return( <div key={item.id} className="hell3">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x {item.price} Rupee
                    </div>
                </div>
            
            )})}
            {billitems.length!==0 && (
                <>
                <hr></hr>
                <div className="hell3">
                    <div className="col-2">Item Price</div>
                    <div className="col-1 text-right">{itemsPrice}</div>
                </div>
                <div className="hell3">
                    <div className="col-2">Tax Price</div>
                    <div className="col-1 text-right">{taxprice}</div>
                </div>
                <div className="hell3">
                    <div className="col-2">Shipping Price</div>
                    <div className="col-1 text-right">{shippingprice}</div>
                </div>
                <div className="hell3">
                    <div className="col-2">Total Price</div>
                    <div className="col-1 text-right">{totalprice}</div>
                </div>
                <hr></hr>
                <div className="hell3">
                    <button onClick={()=>alert("Implement checkout")}>CheckOut</button>
                </div>

                </>
                
            )}

        </aside>
    )
}

export default Funapp3
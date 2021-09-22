import { useState } from 'react';
import './App.css';
import Funapp3 from './components/Bill';
import Funapp1 from './components/Head';
import Funapp2 from './components/Main';
import data from './data';

function App() {
  const {products}=data
  const [billitems,billitemsfun]=useState([])
  
  const onAdd=(product)=>{
    const exist=billitems.find(item=>item.id===product.id)
    if(exist)
    billitemsfun(
      billitems.map((item)=>
        item.id===product.id?{...exist,qty:exist.qty+1}:item
      )
    )
    else{
      billitemsfun([...billitems,{...product,qty:1}])
    }
  }

  const onRemove=(product)=>{
    const exist=billitems.find((x)=>x.id===product.id)
    if(exist.qty===1){
      billitemsfun(billitems.filter((x)=>x.id!==product.id))
    }
    else{
      billitemsfun(
        billitems.map((x)=>x.id===product.id?{...exist,qty:exist.qty-1}:x)
      )
    }
  }

  return (
    <div>
      <Funapp1 countcartItems={billitems.length}></Funapp1>
      <div className="hell3">
      <Funapp2 onAdd={onAdd} products={products}></Funapp2>
      <Funapp3 onAdd={onAdd} onRemove={onRemove} billitems={billitems}></Funapp3>
      </div>

    </div>
  );
}

export default App;

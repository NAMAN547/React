import React, {useState} from 'react'

const Product = (props) => {

  const [price, setPrice] = useState(props.price)

  // let price = props.price;

    const [count, setCount]  =  useState(0);

    const changePriceHandler = () =>{

      // price = 100;
     //  console.log(price)

     setPrice(100) 
    }

  return ( 
<div>

         <figure onClick={changePriceHandler}>
       
           <img src= {props.imageUrl} alt=" "></img>
           <h2> name: {props.name} </h2>
           <h2> price: ${price} </h2>

           <h2> Add Item : {count} </h2>

           <button onClick = {()=> setCount(count+1)}> Add</button>
        
        </figure>
</div>
  )
}

export default Product;
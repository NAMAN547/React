import React from 'react'
import Product from './Product'


const ShoppingList = () => {


    let products = [

        {
            name: "Iphone 14",
            price: "$ 225",
            imgUrl: "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Iphone 13",
            price: "$ 200",
            imgUrl: "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Iphone 12",
            price: "$ 100",
            imgUrl: "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }

    ]



  return (
    <div>ShoppingList:
        {

        products.map((product)=>{

            return <Product name= {product.name}
                            price= {product.price}
                            imageUrl= {product.imgUrl}

                            />
        })

}
    </div>
  )
}

export default ShoppingList
import React from 'react'
import './CartItems.css'
import CartItem from './CartItem';

function CartItems({items}) {
    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <hr />
          <div className="CartItems-items">
            {
              items.map(item => 
                <CartItem 
                  title = {item.title}
                  stock = {item.stock}
                  image = {item.image}
                  price = {item.price}
                  quantity = {item.quantity}
                />  
              )
            }
          </div>
        </div>
    )
}

export default CartItems

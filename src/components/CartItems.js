import React from 'react'
import './CartItems.css'
import CartItem from './CartItem';

function CartItems({items, setCartItems}) {

    const changeItemQuantity = (e, index) => {
      // when we select a quantity on item, we pass it in here
      // passing the index
      // using the index we need to change the quantity to the selected one from selected option
      // update the items state
      console.log(e.target.value);
      console.log("index is ", index);
      const newItems = [...items];
      newItems[index].quantity = e.target.value;
      setCartItems(newItems);
    }

    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <hr />
          <div className="CartItems-items">
            {
              items.map((item, index) => 
                <CartItem
                  index={index}
                  item={item}
                  key={index}
                  changeItemQuantity={changeItemQuantity}
                />  
              )
            }
          </div>
        </div>
    )
}

export default CartItems

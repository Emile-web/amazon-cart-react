import NumberFormat from 'react-number-format';
import React from 'react'
import './CartTotal.css'

function CartTotal({items}) {

    const getTotalPrice = () => {
        // init total price to 0
        //loop through all the items in the cartItems
        //Add the price of item with the quantity to the total price
        //return the total price

        let total = 0;

        items.forEach(item => {
            total += (item.price * item.quantity);
        })

        return total;
    }

    const getTotalItems = () => {
        let totalItem = 0;

        items.forEach(item => {
            totalItem += item.quantity;
        });

        return totalItem;
        
    }

    return (
        <div className="CartTotal">
            <h3>
                Subtotal({getTotalItems()} items):
                <span className="CartTotal-price">
                    <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
                </span>
            </h3>
            <button>
                Proceed to checkout
            </button>
        </div>
    )
}

export default CartTotal

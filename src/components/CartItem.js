import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">

            <div className="CartItem-image">
              <img alt="" src="https://www.cdiscount.com/pdt2/n/f/a/1/700x700/mtfp2nfa/rw/ipad-pro-12-9-retina-512go-wifi-gris-sideral.jpg" />
            </div>

            <div className="CartItem-info">
              <div className="info-title">
                <h2>Apple Ipad Pro</h2>
              </div>
              <div className="info-stock">
                In stock
              </div>
              <div className="item-actions">
                <div className="item-quantity">
                  <select/>
                </div>
                <div className="item-delete">
                    Delete
                </div>
              </div>
            </div>

            <div className="CartiItem-price">
                $769.00
            </div>
          </div>
    )
}

export default CartItem

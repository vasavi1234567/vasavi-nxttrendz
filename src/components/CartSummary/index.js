// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(item => {
        total += item.price * item.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total">
              <span className="value">Order Total: </span>Rs {total} /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button className="small-checkout-button" type="button">
              Checkout
            </button>
          </div>
          <button className="large-checkout-button" type="button">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

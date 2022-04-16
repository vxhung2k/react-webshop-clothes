import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import { Layout } from '../../components'
import './Cart.css'
const Cart = () => {
  const {

    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  return (
    <Layout>
      <div className="container cart">
        
        <table className='table__cart'>
        <h2> Giỏ Hàng: {totalUniqueItems} sản phẩm || Tổng số sản phẩm: {totalItems} sản phẩm</h2>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={item.title + index}>
                  <td><img src={item.image02} /></td>
                  <td>{item.title}</td>

                  <td>{item.price} VNĐ</td>
                  <td>Số lượng :{item.quantity}</td>
                  <td className='btx'>
                    <button className='button1'
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <button className='button1'
                      onClick={() => removeItem(item.id)}
                    >Xóa</button>
                    <button className='button1'
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </td>

                </tr>
              )
            })}

          </tbody>
        </table>
        <div className="cart__footer">
          <div className="total__price">
            <h3>Tổng số tiền : {cartTotal} VNĐ</h3>
          </div>
          <div className="clear__cart">
            <button className="button" onClick={() => emptyCart()}>Xóa giỏ hàng</button>
          </div>
          <div className="comeback">
          <Link to='/catalog'>
            <button className="button">Tiếp tục mua sắm</button>
          </Link>
          <Link to='/contact'>
            <button className="button">Đặt hàng ngay</button>
          </Link>
          </div>
          
        </div>
      </div>
    </Layout>
  )
}

export default Cart
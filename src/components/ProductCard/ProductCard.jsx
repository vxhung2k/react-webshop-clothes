import React from 'react'
import './ProductCard.css'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import productData from '../../assets/fake-data/products'
import { Convert } from '../../components'
import voucher from '../../assets/images/banner.png'
import { useCart } from 'react-use-cart'

const ProductCard = (props) => {
  const {
    totalUniqueItems
  } = useCart();

 
  return (
    <div className="container productcard">
      <h1 >Top Sản Phẩm Bán Chạy Trong Tuần</h1>
      <div className="hotproduct__container">
        {
          productData.getProducts(4).map((item, index) => (
            <Link to={`/catalog/${item.slug}`}>
              <div className="hotproduct__container__item" key={index}>
                <div className="hotproduct__img">
                  <img src={item.image02} alt="" />
                  <img src={item.image01} alt="" />
                </div>
                <div className="hotproduct__info">
                  <div className="hotproduct__name">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="hotproduct__price">
                    <h3>{Convert(item.price)} VNĐ</h3>
                    <span>{Convert(390000)} VNĐ</span>
                  </div>
                  <div className="hotproduct__buy">
                    <button className='button' >Chọn mua</button>
                    
                    <GiShoppingCart className='icons' />{totalUniqueItems}
                  </div>
                </div>

              </div>
            </Link >
          ))
        }
      </div>
      <h1>Sản Phẩm Mới</h1>
      <div className="newproduct__container">
        {productData.getProducts(8).map((item, index) => (
          <Link to={`/catalog/${item.slug}`}>
            <div className="newproduct__container__item" key={index}>
              <div className="newproduct__img">
                <img src={item.image02} alt="" />
                <img src={item.image01} alt="" />
              </div>
              <div className="newproduct__info">
                <div className="hotproduct__name">
                  <h2>{item.title}</h2>
                </div>
                <div className="newproduct__price">
                  <h3>{Convert(item.price)} VNĐ</h3>
                  <span>{Convert(390000)} VNĐ</span>
                </div>
                <div className="newproduct__buy">
                  <button className='button'>Chọn mua</button>
                  <GiShoppingCart className='icons' />{totalUniqueItems}
                </div>
              </div>

            </div>
          </Link >
        ))}
      </div>
      <div className="voucher">
        <img src={voucher} alt="" />
      </div>
      <h1>Sản Phẩm Phổ biến</h1>
      <div className="popularproduct__container">
      {productData.getProducts(12).map((item, index) => (
          <Link to={`/catalog/${item.slug}`}>
            <div className="popularproduct__container__item" key={index}>
              <div className="popularproduct__img">
                <img src={item.image02} alt="" />
                <img src={item.image01} alt="" />
              </div>
              <div className="popularproduct__info">
                <div className="popularproduct__name">
                  <h2>{item.title}</h2>
                </div>
                <div className="popularproduct__price">
                  <h3>{Convert(item.price)} VNĐ</h3>
                  <span>{Convert(390000)} VNĐ</span>
                </div>
                <div className="popularproduct__buy">
                  <button className='button'>Chọn mua</button>
                  <GiShoppingCart className='icons' />{totalUniqueItems}
                </div>
              </div>

            </div>
          </Link >
        ))}
      </div>
    </div>





  )
}

export default ProductCard
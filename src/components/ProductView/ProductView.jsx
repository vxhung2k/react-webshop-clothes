import React, { useState } from 'react'
import { Layout, Convert } from '../../components'
import productData from '../../assets/fake-data/products'
import { useParams, Link } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'
import { useCart } from 'react-use-cart'
import './ProductView.css'

const ProductView = (props) => {

    const {addItem,totalUniqueItems} =useCart();
    const { slug } = useParams();


    const product = productData.getProductBySlug(slug)

    const relatedProduct = productData.getProducts(4)

    //sử dụng cho show xem thêm
    const [isClick, setClick] = useState(true)
    const handleClick = () => {
        setClick(!isClick)
    }



    return (
        <Layout>
            <div className="container productview">
                <div className="productdisplay">
                    <div className="productdisplay__left">
                        <div className="productdisplay__left__img">
                            <div className="productdisplay__left__img_left">
                                <img src={product.image01} alt="người" />
                                <img src={product.image02} alt="đồ" />
                            </div>
                            <div className="productdisplay__left__img_right">
                                <img src={product.image01} alt="người" />

                            </div>
                        </div>

                        <div className="product__detail">
                            <p>{product.content}</p>
                            {isClick ? (

                                <p>{product.detail}</p>
                            ) : (
                                <p>{product.detailfull}</p>

                            )}

                            {isClick ? (
                                <button className='button' onClick={handleClick}>Xem thêm</button>

                            ) : (
                                <button className='button' onClick={handleClick}>Thu gọn</button>
                            )}

                        </div>


                    </div>
                    <div className="productdisplay__right">
                        <h2 className='text-light'>{product.title}</h2>
                        <h2>{Convert(product.price)} VNĐ</h2>
                        
                        <div className="product__color">
                            <h2>Màu Sắc</h2>
                            <div className="a">
                                {product.colors.map((item, index) => (
                                    <div className="product__color__item" key={index}>
                                        <button className='button__circle' style={{ background: `${item}` }}  onClick={()=>addItem(item)}></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="product__size">
                            <h2>Kích Thước</h2>
                            <div className="a">
                                {product.size.map((item, index) => (
                                    <div className="product__color__item" key={index}>
                                        <button className='button__circle'>{item}</button>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="product__right__buy">
                            <button className="button" onClick={()=>addItem(product)}>Thêm vào giỏ hàng</button>
                            <button className="button">Mua ngay</button>
                        </div>

                    </div>



                </div>
                <div className="product__more">
                    {relatedProduct.map((item, index) => (
                        <Link to={`/catalog/${item.slug}`}>
                            <div className="product__more__item" key={index}>
                                <div className="product__more__img">
                                    <img src={item.image02} alt="" />
                                    <img src={item.image01} alt="" />
                                </div>
                                <div className="product__more__info">
                                    <div className="product__name">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className="product__more__price">
                                        <h3>{Convert(item.price)} VNĐ</h3>
                                        <span>{Convert(390000)} VNĐ</span>
                                    </div>
                                    <div className="product__more__buy">
                                        <button className='button'>Chọn mua</button>
                                        <GiShoppingCart className='icons' /> {totalUniqueItems}
                                    </div>
                                </div>

                            </div>
                        </Link >
                    ))}
                </div>

            </div>
        </Layout>
    )
}

export default ProductView
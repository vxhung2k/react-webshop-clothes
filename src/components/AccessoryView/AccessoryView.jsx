import React, { useState } from 'react'
import { Layout, Convert } from '../../components'
import { useParams, Link } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'
import accessoryData from '../../assets/fake-data/accessory'
import { useCart } from 'react-use-cart'
import './AccessoryView.css'

const AccessoryView = (props) => {
    const {addItem,totalUniqueItems} =useCart();
    const { slug } = useParams();


    const accessory = accessoryData.getAccessorytBySlug(slug)

    const relatedAccessories = accessoryData.getAccessory(4)

    //sử dụng cho show xem thêm
    const [isClick, setClick] = useState(true)
    const handleClick = () => {
        setClick(!isClick)
    }

    return (
        <Layout>
            <div className='container accessoryview'>
                <div className="accessories__display">

                    <div className="accessories__display__left">
                        <div className="accessories__display__left__img">
                            
                            
                                <img src={accessory.image02} alt="" />

                            
                        </div>

                        <div className="accessories__detail">
                            <p>{accessory.content}</p>
                            {isClick ? (

                                <p>{accessory.detail}</p>
                            ) : (
                                <p>{accessory.detailfull}</p>

                            )}

                            {isClick ? (
                                <button className='button' onClick={handleClick}>Xem thêm</button>

                            ) : (
                                <button className='button' onClick={handleClick}>Thu gọn</button>
                            )}

                        </div>


                    </div>


                    <div className="accessories__display__right">
                        <h2 className='text-light'>{accessory.title}</h2>
                        <h2>{Convert(accessory.price)} VNĐ  <span className='danger'>Sale 20%</span></h2>
                        
                        <div className="accessories__color">
                            <h2>Màu Sắc</h2>
                            <div className="a">
                                {accessory.colors.map((item, index) => (
                                    <div className="accessories__color__item" key={index}>
                                        <button className='button__circle' style={{ background: `${item}` }} ></button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="accessories__right__buy">
                            <button className="button" onClick={()=>addItem(accessory)}>Thêm vào giỏ hàng</button>
                            <button className="button">Mua ngay</button>
                        </div>

                    </div>

                </div>



                <div className="accessories__more">
                    {relatedAccessories.map((item, index) => (
                        <Link to={`/accessories/${item.slug}`}>
                            <div className="accessories__more__item" key={index}>
                                <div className="accessories__more__img">
                                    <img src={item.images} alt="" />

                                </div>
                                <div className="accessories__more__info">
                                    <div className="accessories__name">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className="accessories__more__price">
                                        <h3>{Convert(item.price)} VNĐ</h3>
                                        <span className='danger'>Sale 20%</span>

                                    </div>
                                    <div className="accessories__more__buy">
                                        <button className='button'>Chọn mua</button>
                                        <GiShoppingCart className='icons' />{totalUniqueItems}
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

export default AccessoryView
import React from 'react'

import './Policy.css'
import {SiShopify} from 'react-icons/si'
import {FcSimCardChip,FcVip} from 'react-icons/fc'
import {RiHandHeartFill} from 'react-icons/ri'


const Policy = () => {
  return (
    <div className="container policy">
        <div className="policy__container">
            <div className="policy__item">
                <SiShopify className='icons'/>
                <div className="policy__item__about">
                    <h2>Miễn phí giao hàng</h2>
                    <p>Miễn phí ship với đơn hàng từ 239K</p>
                </div>
            </div>
            <div className="policy__item">
                <FcSimCardChip className='icons'/>
                <div className="policy__item__about">
                    <h2>Thanh toán COD</h2>
                    <p>Thanh toán khi nhận hàng (COD)</p>
                </div>
            </div>
            <div className="policy__item">
                <FcVip className='icons'/>
                <div className="policy__item__about">
                    <h2>Khách hàng VIP</h2>
                    <p>Ưu đãi dành cho khách hàng VIP</p>
                </div>
            </div>
            <div className="policy__item">
                <RiHandHeartFill className='icons'/>
                <div className="policy__item__about">
                    <h2>Hỗ trợ bảo hành</h2>
                    <p>Đổi, sửa đồ tại tất cả store</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Policy
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'

const policy=[
  {
    display:'Chính sách đổi trả',
    path:'/policy'
  },
  {
    display:'Chính sách bảo hành',
    path:'/policy'
  },
  {
    display:'Chính sách hoàn tiền',
    path:'/policy'
  }
]


const aboutYolo=[
  {
    display:'Giới thiệu',
    path:'/about'
  },
  {
    display:'Liên hệ',
    path:'/about'
  },
  {
    display:'Tuyển dụng',
    path:'/about'
  },
  {
    display:'Tin tức',
    path:'/about'
  },
  {
    display:'Hệ thống nhà hàng',
    path:'/about'
  }
]


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="help">
          <h2 className="text-light">Tổng đài hỗ trợ</h2>
          <h3>Liên hệ đặt hàng: <a href="tel:0988551630">0988551360</a></h3>
          <h3 >Thắc mắc đơn hàng : <a href="tel:0336280025">0336280025</a></h3>
          <h3 >Góp ý & khiếu nại : <a href="tel:19001528">19001528</a></h3>
        </div>
        <div className="about__yolo">
          <h2 className="text-light">Về YOLO</h2>
          {aboutYolo.map((item,index)=>{
            return(
              <div className="about__Yolo__list" key={index}>
                <Link to={item.path}>
                  <h3>{item.display}</h3>
                </Link>
              </div>
            )
          })}
        </div>
        <div className="policy__Yolo">
          <h2 className="text-light">Chăm sóc khách hàng</h2>
          
            {policy.map((item,index)=>{
              return(
                <div className="policy__list" key={index}>
                  <Link to={item.path}>
                    <h3>{item.display }</h3>
                  </Link>
                  </div>

              )
            })}
          
        </div>

        <div className="content">
          <img src={logo} alt="" />
          <p>Nhằm hướng tới nhu cầu mua sắm nhằm thỏa mãn cuộc sống của người dùng Việt Nam .Hãy cùng YOLO chúng tôi hướng tới 1 cuộc sống năng động hơn ^_^</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer

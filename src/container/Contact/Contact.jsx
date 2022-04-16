import React from 'react'
import { Header } from '../../components'
import { useForm, ValidationError } from '@formspree/react';
import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import './Contact.css'


function ContactForm() {
    const [state, handleSubmit] = useForm("mayvpdkr");
    if (state.succeeded) {
        return <p>Cảm ơn quy khách đã gửi phản hồi</p>;
    }
    return (
        <form className='form__booktable' onSubmit={handleSubmit}>
            <label htmlFor="name">
                Họ tên:

                <input
                    id="form__id"
                    type="text"
                    name="Họ tên"
                    placeholder="Họ tên.."
                    required
                />
            </label>
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />


            <label htmlFor="phone">
                Số điện thoại:

                <input
                    id="form__id"
                    type="text"
                    name="Số điện thoại"
                    placeholder="số điện thoại.."
                    maxLength={10}
                    required
                />
            </label>
            <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
            />

            <label htmlFor="email">Email:

                <input
                    id="form__id"
                    name="email"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder="Email..."
                    required
                />
            </label>
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />


            <label htmlFor="datetime">Thời gian:

                <input
                    id="form__id"
                    name="Thời gian"
                    type="datetime-local"
                    required
                />
            </label>
            <ValidationError
                prefix="Datetime"
                field="datetime"
                errors={state.errors}
            />

            
            <label htmlFor="message">Phản hồi:
                <textarea
                    id="form__id"
                    name="Ghi chú"
                    placeholder="Ghi chú..."
                />
            </label>
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            
            <input type="submit" disabled={state.submitting} />
            
            

        </form>
    );
}



const Contact = () => {
  return (

    <div className="contact">
      <Header />
      <ContactForm />

      <div className="footerOverlay__container">
        <div className="footerOverlay">
          <div className="contact">
            <h1 className="text-light">Liên Hệ</h1>
            <h2><HiOutlineLocationMarker className='icon1' /><a href="https://goo.gl/maps/kxoL5YULvvgJpzYd8">Đường An Định - Phường Việt Hoa - Thành phố Hải Dương - Hải Dương</a></h2>
            <h2 ><BsFillTelephoneFill className='icon1' /><a href="tel:+0985577152">:0985577152</a></h2>
          </div>
          <div className="address">
            <div className="address__head">
              <h1 className="text-light">YOLO SHOP</h1>
              <h2 > Chân thành cảm ơn sự quan tâm của quý khách đã quan tâm tới sản phẩm chúng tôi!</h2>

              <div className="social__network">
                <a href="https://facebook.com"><FiFacebook className='icon' /></a>
                <a href="https://instagram.com"><FiInstagram className='icon' /></a>
                <a href="https://gmail.com"><FiMail className='icon' /></a>
              </div>
            </div>
          </div>
          <div className="work__on">
            <h1 className="text-light">Giờ Mở Cửa</h1>
            <p>Monday - Sunday:<br />
              08:00 AM - 22:00 PM
            </p>

          </div>
        </div>
        <div className="copyright">
          <h4>2022 - WEBSHOP. All Rights Reserved - Desing By:Vũ Xuân Hùng</h4>
        </div>
      </div>


    </div>

  )
}

export default Contact
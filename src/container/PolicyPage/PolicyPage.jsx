import React from 'react'
import './PolicyPage.css'
import cs from '../../assets/images/cs.jpg'
const PolicyPage = () => {
  return (
    <div className="policy">
      <div className="policypage__container">
        <h1>CHÍNH SÁCH BẢO HÀNH VÀ ĐỔI SẢN PHẨM</h1>
        <p> YOLO luôn mong muốn mang đến cho khách hàng sự hài lòng trước và sau khi mua hàng bằng những chính sách chăm sóc khách hàng chu đáo và tận tâm. Vì vậy, trong thời gian sử dụng sản phẩm, nếu gặp bất kì lỗi kỹ thuật nào khách hàng có thể liên hệ trực tiếp các store YOLO hoặc văn phòng giao dịch Remmy để được giúp đỡ</p>
        <img src={cs} alt="" />
        <div className="content">
          <h2>Những sản phẩm được đổi khi đảm bảo các điều kiện sau:</h2>
          <p>- Thời gian đổi sản phẩm trong vòng 03 ngày ( kể từ ngày xuất bán đối với mua trực tiếp hoặc kể từ ngày nhận được sản phẩm đối với mua hàng qua mạng)</p>
          <p>- Sản phẩm phải nguyên vẹn, còn nguyên tem mác như khi Remmy bàn giao.</p>
          <p>- Sản phẩm đổi phải ngang giá hoặc lớn hơn so với sản phẩm trả.</p>
          <p>- Tất cả các chi phí phát sinh khi đổi trả  khách hàng phải chịu 100%.</p>
          <h2>Những trường hợp được bảo hành, sửa chữa  không tính phí</h2>
          <p>-  Đối với các sản phẩm quần âu, áo sơ mi do Remmy sản xuất, khách hàng có nhu cầu lên gấu, bóp eo chỉnh sửa form dáng áo ,quần....</p>
          <p>- Đối với sản phẩm giày da, thắt lưng Remmy hiện không nhận bảo hàng</p>
          <h2>Những trường hợp bảo hành có tính phí:</h2>
          <p>- Đối với các sản phẩm quần, áo mà khách hàng trong quá trình sử dụng bị rách, hỏng và có nhu cầu sửa chữa, cũng như Remmy có khả năng sửa chữa được.</p>
        </div>
      </div>
    </div>
  )
}

export default PolicyPage
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          
          <div className="footer-col footer-info">
            <div className="footer-logo">
              <span className="logo-steam">STEAM</span> Edu
            </div>
            <p className="footer-desc">
              Trung tâm đào tạo STEAM hàng đầu, mang đến môi trường học tập lý tưởng giúp khơi dậy niềm đam mê Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học cho thế hệ trẻ.
            </p>
          </div>
          
          <div className="footer-col footer-links">
            <h4 className="footer-title">Links Nhanh</h4>
            <ul>
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#courses">Khóa học nổi bật</a></li>
              <li><a href="#reviews">Đánh giá học viên</a></li>
              <li><a href="#contact">Liên hệ tư vấn</a></li>
            </ul>
          </div>
          
          <div className="footer-col footer-social">
            <h4 className="footer-title">Mạng Xã Hội</h4>
            <div className="social-links">
              <a href="#" className="social-btn" aria-label="Facebook">FB</a>
              <a href="#" className="social-btn" aria-label="YouTube">YT</a>
              <a href="#" className="social-btn" aria-label="Instagram">IG</a>
              <a href="#" className="social-btn" aria-label="TikTok">TK</a>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 STEAM Edu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

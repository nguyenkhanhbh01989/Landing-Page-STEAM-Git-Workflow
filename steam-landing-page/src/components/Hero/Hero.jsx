import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Khám Phá Thế Giới <span className="highlight">STEAM</span>
          </h1>
          <p className="hero-description">
            Hành trình đánh thức tiềm năng sáng tạo và tư duy logic của bạn thông qua các khóa học Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học mang tính ứng dụng cao.
          </p>
          <div className="hero-actions">
            <button className="btn-cta">Đăng Ký Ngay</button>
            <button className="btn-outline">Tìm Hiểu Thêm</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-placeholder">
            <div className="placeholder-content">
              <span>Hình Ảnh / Video Demo</span>
            </div>
            <div className="placeholder-shape shape-1"></div>
            <div className="placeholder-shape shape-2"></div>
            <div className="placeholder-shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

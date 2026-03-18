import { useState } from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submission data:', formData)
    alert('🎉 Đăng ký thành công! Đội ngũ tư vấn sẽ liên hệ với bạn trong thời gian sớm nhất.')
    setFormData({ fullName: '', email: '', phone: '' })
  }

  return (
    <section className="register-section" id="register-form">
      <div className="register-container">
        <div className="register-wrapper">
          
          {/* Cột trái: Nội dung & Minh họa */}
          <div className="register-info">
            <h2 className="register-heading">
              🎓 Bắt Đầu Hành Trình <br/> 
              <span className="highlight-text">STEAM</span> Cùng Chúng Tôi
            </h2>
            <p className="register-desc">Để lại thông tin để nhận lộ trình học cá nhân hóa phù hợp nhất cho tương lai của bạn. Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ 24/7. ✨</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Đường Sáng Tạo, Quận Công Nghệ, Hà Nội</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>0123 456 789</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>hello@steamedu.vn</span>
              </div>
            </div>
          </div>
          
          {/* Cột phải: Form */}
          <div className="register-form-container">
            <h3 className="form-title">📝 Đăng Ký Tư Vấn</h3>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Họ và tên</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  className="form-input" 
                  placeholder="Nhập họ và tên..."
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-input" 
                  placeholder="0912 345 678"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  pattern="[0-9]{10,11}"
                  title="Vui lòng nhập số điện thoại hợp lệ (10-11 số)"
                />
              </div>
              
              <button type="submit" className="form-submit-btn">🚀 Đăng Ký Ngay</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterForm

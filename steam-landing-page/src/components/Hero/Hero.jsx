import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Khám Phá Thế Giới'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="typewriter">{displayText}</span>
            <span className="cursor-blink">|</span>
            <br />
            <span className="highlight">STEAM</span> <span className="hero-emoji">🤖</span>
          </h1>
          <p className="hero-description">
            Hành trình đánh thức tiềm năng sáng tạo và tư duy logic của bạn thông qua các khóa học Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học mang tính ứng dụng cao. 🎨✨
          </p>
          <div className="hero-actions">
            <button className="btn-cta">🚀 Đăng Ký Ngay</button>
            <button className="btn-outline">📖 Tìm Hiểu Thêm</button>
          </div>
        </div>

        {/* 3D Cube Section */}
        <div className="hero-3d-wrapper">
          <div className="cube-glow"></div>
          <div className="cube-container">
            <div className="cube">
              <div className="cube-face front">
                <span className="face-icon">🔬</span>
                <span className="face-label">Science</span>
              </div>
              <div className="cube-face back">
                <span className="face-icon">🎨</span>
                <span className="face-label">Art</span>
              </div>
              <div className="cube-face right">
                <span className="face-icon">💻</span>
                <span className="face-label">Tech</span>
              </div>
              <div className="cube-face left">
                <span className="face-icon">⚙️</span>
                <span className="face-label">Engineering</span>
              </div>
              <div className="cube-face top">
                <span className="face-icon">🧮</span>
                <span className="face-label">Math</span>
              </div>
              <div className="cube-face bottom">
                <span className="face-icon">🚀</span>
                <span className="face-label">STEAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

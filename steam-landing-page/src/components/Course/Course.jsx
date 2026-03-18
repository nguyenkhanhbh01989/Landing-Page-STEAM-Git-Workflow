import './Course.css'

const Course = () => {
  const courses = [
    {
      id: 1,
      title: 'Lập Trình Scratch',
      description: 'Khám phá tư duy lập trình cơ bản qua các khối lệnh sinh động, tạo ra game và hoạt ảnh thú vị đầu tay của chính bạn.',
      icon: '🎮',
      color: 'var(--steam-art)'
    },
    {
      id: 2,
      title: 'Lập Trình Web Cơ Bản',
      description: 'Xây dựng website thực tế với HTML, CSS và JavaScript. Nắm bắt các phương pháp thiết kế Web hiện đại và chuẩn Responsive.',
      icon: '🌐',
      color: 'var(--steam-tech)'
    },
    {
      id: 3,
      title: 'Thiết Kế Game 3D',
      description: 'Học cách xây dựng thế giới ảo, lập trình logic và phát triển trò chơi 3D hoàn chỉnh cùng với đa dạng các nền tảng Engine.',
      icon: '🎲',
      color: 'var(--steam-science)'
    }
  ]

  return (
    <section className="course-section" id="courses">
      <div className="course-container">
        <div className="course-header">
          <h2 className="course-heading">Các Khóa Học Nổi Bật</h2>
          <p className="course-subheading">Lộ trình học tập cá nhân hóa giúp đánh thức tiềm năng sáng tạo và trang bị kỹ năng công nghệ tương lai.</p>
        </div>
        
        <div className="course-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <div 
                className="course-icon-wrapper" 
                style={{ background: `linear-gradient(135deg, ${course.color}22, ${course.color}55)` }}
              >
                <span className="course-icon">{course.icon}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              <button className="course-btn">
                Tìm hiểu thêm
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Course

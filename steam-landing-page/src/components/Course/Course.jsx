import './Course.css'

const Course = () => {
  const courses = [
    {
      id: 1,
      title: '🎮 Lập Trình Scratch',
      description: 'Khám phá tư duy lập trình cơ bản qua các khối lệnh sinh động, tạo ra game và hoạt ảnh thú vị đầu tay của chính bạn.',
      image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&h=340&fit=crop&q=80',
      tag: 'Beginner',
      tagColor: 'var(--kid-green)',
    },
    {
      id: 2,
      title: '🌐 Lập Trình Web',
      description: 'Xây dựng website thực tế với HTML, CSS và JavaScript. Nắm bắt các phương pháp thiết kế Web hiện đại và chuẩn Responsive.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=340&fit=crop&q=80',
      tag: 'Intermediate',
      tagColor: 'var(--steam-tech)',
    },
    {
      id: 3,
      title: '🤖 Robotics & Game 3D',
      description: 'Học cách lắp ráp robot, lập trình logic và phát triển trò chơi 3D hoàn chỉnh cùng với đa dạng các nền tảng Engine.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop&q=80',
      tag: 'Advanced',
      tagColor: 'var(--steam-engineering)',
    }
  ]

  return (
    <section className="course-section" id="courses">
      <div className="course-container">
        <div className="course-header">
          <h2 className="course-heading">
            <span className="course-heading-emoji">🌟</span> Các Khóa Học Nổi Bật
          </h2>
          <p className="course-subheading">Lộ trình học tập cá nhân hóa giúp đánh thức tiềm năng sáng tạo và trang bị kỹ năng công nghệ tương lai. 🚀</p>
        </div>
        
        <div className="course-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-image-wrapper">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="course-image"
                  loading="lazy"
                />
                <span className="course-tag" style={{ backgroundColor: course.tagColor }}>
                  {course.tag}
                </span>
              </div>
              <div className="course-body">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Course

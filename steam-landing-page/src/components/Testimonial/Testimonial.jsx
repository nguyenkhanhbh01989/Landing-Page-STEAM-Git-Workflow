import './Testimonial.css'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      content: "Nhờ khóa học Web cơ bản, con đã có thể tự tay làm ra một trang web giới thiệu bản thân và chia sẻ sở thích. Các thầy cô hướng dẫn rất tận tình và dễ hiểu. 🌟",
      name: "Nguyễn Minh Khang",
      role: "Học viên lớp Web 🌐",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face&q=80",
    },
    {
      id: 2,
      content: "Chưa bao giờ em nghĩ lập trình game lại thú vị đến thế! Hiện tại em đã hoàn thiện được trò chơi phiêu lưu đầu tay trên Scratch và chia sẻ cho cả lớp cùng tham gia. 🎮",
      name: "Trần Hà My",
      role: "Học viên lớp Scratch 🧩",
      avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=120&h=120&fit=crop&crop=face&q=80",
    }
  ]

  return (
    <section className="testimonial-section" id="reviews">
      <div className="testimonial-container">
        <h2 className="testimonial-heading">
          <span className="testimonial-heading-emoji">⭐</span> Cảm nhận từ Học viên
        </h2>
        <div className="testimonial-flex">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonial-avatar-img"
                  loading="lazy"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial

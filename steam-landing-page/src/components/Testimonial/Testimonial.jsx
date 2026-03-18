import './Testimonial.css'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      content: "Nhờ khóa học Web cơ bản, con đã có thể tự tay làm ra một trang web giới thiệu bản thân và chia sẻ sở thích. Các thầy cô hướng dẫn rất tận tình và dễ hiểu. 🌟",
      name: "Nguyễn Minh Khang",
      role: "Học viên lớp Web 🌐",
      avatar: "MK"
    },
    {
      id: 2,
      content: "Chưa bao giờ em nghĩ lập trình game lại thú vị đến thế! Hiện tại em đã hoàn thiện được trò chơi phiêu lưu đầu tay trên Scratch và chia sẻ cho cả lớp cùng tham gia. 🎮",
      name: "Trần Hà My",
      role: "Học viên lớp Scratch 🧩",
      avatar: "HM"
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
                <div className="testimonial-avatar">{testimonial.avatar}</div>
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

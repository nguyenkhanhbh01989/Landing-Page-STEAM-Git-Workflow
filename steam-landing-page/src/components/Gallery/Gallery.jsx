import './Gallery.css'

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=80',
      alt: 'Học sinh đang lập trình trên máy tính',
      caption: 'Lập trình sáng tạo 💻',
      span: 'tall',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop&q=80',
      alt: 'Trẻ em lắp ráp robot',
      caption: 'Lắp ráp Robot 🤖',
      span: '',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=600&h=400&fit=crop&q=80',
      alt: 'Thí nghiệm khoa học',
      caption: 'Thí nghiệm STEM 🔬',
      span: '',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80',
      alt: 'Lớp học công nghệ',
      caption: 'Lớp học hiện đại 📚',
      span: '',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop&q=80',
      alt: 'Học sinh viết code',
      caption: 'Viết code đầu tay 🚀',
      span: 'tall',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80',
      alt: 'Trẻ em làm việc nhóm',
      caption: 'Làm việc nhóm 🎨',
      span: '',
    }
  ]

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-heading">
            <span className="gallery-heading-emoji">📸</span> Hình Ảnh Lớp Học & Dụng Cụ
          </h2>
          <p className="gallery-subheading">Những khoảnh khắc đáng nhớ tại trung tâm STEAM Edu – nơi sáng tạo không giới hạn! ✨</p>
        </div>

        <div className="gallery-grid">
          {images.map(image => (
            <div className={`gallery-item ${image.span}`} key={image.id}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-caption">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

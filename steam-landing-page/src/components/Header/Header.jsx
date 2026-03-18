import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-emoji">🚀</span>
          <span className="logo-steam">STEAM</span> Edu
        </div>
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link active" onClick={() => setMenuOpen(false)}>🏠 Trang chủ</a></li>
            <li className="nav-item"><a href="#courses" className="nav-link" onClick={() => setMenuOpen(false)}>📚 Khóa học</a></li>
            <li className="nav-item"><a href="#reviews" className="nav-link" onClick={() => setMenuOpen(false)}>⭐ Đánh giá</a></li>
            <li className="nav-item"><a href="#register-form" className="nav-link" onClick={() => setMenuOpen(false)}>📩 Liên hệ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

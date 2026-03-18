import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-steam">STEAM</span> Edu
        </div>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link active">Trang chủ</a></li>
            <li className="nav-item"><a href="#courses" className="nav-link">Khóa học</a></li>
            <li className="nav-item"><a href="#reviews" className="nav-link">Đánh giá</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Liên hệ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

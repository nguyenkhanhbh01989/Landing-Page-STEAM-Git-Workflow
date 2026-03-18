import Header from './components/Header/Header'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <section id="home" style={{ minHeight: '100vh', padding: '100px 2rem 2rem' }}>
          <h1 style={{ textAlign: 'center' }}>Chào mừng đến với STEAM Edu</h1>
        </section>
      </main>
    </div>
  )
}

export default App

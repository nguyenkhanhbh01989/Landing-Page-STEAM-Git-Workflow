import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Course from './components/Course/Course'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Course />
      </main>
    </div>
  )
}

export default App

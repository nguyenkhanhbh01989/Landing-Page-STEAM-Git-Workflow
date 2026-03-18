import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Course from './components/Course/Course'
import Testimonial from './components/Testimonial/Testimonial'
import RegisterForm from './components/RegisterForm/RegisterForm'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Course />
        <Testimonial />
        <RegisterForm />
      </main>
    </div>
  )
}

export default App

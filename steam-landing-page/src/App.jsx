import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Course from './components/Course/Course'
import Gallery from './components/Gallery/Gallery'
import Testimonial from './components/Testimonial/Testimonial'
import RegisterForm from './components/RegisterForm/RegisterForm'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Course />
        <Gallery />
        <Testimonial />
        <RegisterForm />
      </main>
      <Footer />
    </div>
  )
}

export default App

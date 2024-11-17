import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials';
import Download from './sections/Download'
import Footer from './sections/Footer'


function App() {

  return (
   <main className='overflow-hidden'>
    <Header></Header>
    <Hero></Hero>
    <Features></Features>
    <Pricing></Pricing>
    <Faq></Faq>
    <Testimonials></Testimonials>
    <Download></Download>
    <Footer></Footer>
   </main>
  )
}

export default App

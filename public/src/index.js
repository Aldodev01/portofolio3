// impoort app.js
import app from './app.js'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Headline from './components/Headline.js'
import Slider from './components/Slider.js'
import About from './components/About.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'

// buat function index yang 
const index = ()=>{
    return `
       
        ${Navbar()}
        ${Menu()}
        ${Hero()}
        ${Headline()}
        ${Slider()}
        ${About()}
        ${Footer()}

    `
}

// export index() agar bisa digunakan difile JS lainnya
export default index
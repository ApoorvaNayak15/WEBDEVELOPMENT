import { BrowserRouter,Routes,Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Services from "./components/Services"
import './style/App.scss'
import './style/Header.scss'
import './style/Home.scss'
import './style/Footer.scss'
import './style/Contact.scss'
import './style/mediaquery.scss'

function App(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
  
    )
}
export default App
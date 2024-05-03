
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import WebDesigning from './pages/WebDesigning'
import About from './pages/About'
import DigitalMarketing from './pages/DigitalMarketing'
import Development from './pages/Development'
import Creative from './pages/Creative'
import WebDesign from './pages/WebDesign'
import ResponsiveWebsiteDesign from './pages/ResponsiveWebsiteDesign'
import EcommerceWebsiteDesign from './pages/EcommerceWebsiteDesign'
import EcommerceWebDevelopment from './pages/EcommerceWebDevelopment'
import WebsiteRedesigning from './pages/WebsiteRedesigning'
import PsdToHtml from './pages/PsdToHtml'
import WebDevelopment from './pages/WebDevelopment'
import GraphicDesign from './pages/GraphicDesign'
import UiUxDesigning from './pages/UiUxDesigning'
import Contact from './pages/Contact'


function App() {
 

  return (
    <>
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/webdesign' element={<WebDesigning />} />
       <Route path='/about' element={<About />} />
       <Route path='/digitalMarketing' element={<DigitalMarketing />} />
       <Route path='/development' element={<Development />} />
       <Route path='/creative' element={<Creative />} />
       <Route path='/webdesigningservice' element={<WebDesign />} />
       <Route path='/responsiveWebsiteDesign' element={<ResponsiveWebsiteDesign />} />
       <Route path='/ecommerceWebsiteDesign' element={<EcommerceWebsiteDesign />} />
       <Route path='/ecommerceWebDevelopment' element={<EcommerceWebDevelopment />} />
       <Route path='/websiteRedesigning' element={<WebsiteRedesigning />} />
       <Route path='/psdtohtml' element={<PsdToHtml />} />
       <Route path='/webdevelopment' element={<WebDevelopment />} />
       <Route path='/graphicDesign' element={<GraphicDesign />} />
       <Route path='/uiuxDesigning' element={<UiUxDesigning />} />

       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App

import './App.css';
import { NavBar } from './Components/Layout/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Home} from './Components/Main/Home';
import { About } from './Components/Main/About';
import {Contact} from './Components/Main/Contact'
import { Footer } from './Components/Layout/Footer';
import {Card} from './Components/Main/Card'
import Blog from './Components/Main/Blog'
function App() {
  let Data="JAYKARNcodes";
  return (
    <div >
    <BrowserRouter>
    <NavBar data={Data}/>
      <Routes>
      <Route path='/' element={<Home data={Data}/>}></Route>
      <Route path='/about' element={<About data={Data}/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/card' element={<Card/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;

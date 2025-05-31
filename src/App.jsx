import './components/css/App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="환영합니다-Bienvenido-Welcome-欢迎-Bemvindo-Willkommen-ようこそ"/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting="Idiomas de categoria: "/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

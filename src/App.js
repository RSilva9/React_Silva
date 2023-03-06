import RNavBar from './components/NavBar';
import Title from './components/Title';
import PictureCarousel from './components/PictureCarousel';
import './css/main.css'
import TitleContainer from './components/TitleContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <RNavBar />

        <Routes>
          <Route path="/" element={
            <main>
              <TitleContainer />
              <PictureCarousel />
            </main>
          }/>

          <Route path="/catalogo" element={
            <main>
              <ItemListContainer />
            </main>
          }/>

          <Route path="catalogo/producto/:numberProducto" element={
            <main>
              <ItemDetailContainer />
            </main>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

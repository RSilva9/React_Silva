import RNavBar from './components/NavBar';
import Title from './components/Title';
import PictureCarousel from './components/PictureCarousel';
import './css/main.css'
import TitleContainer from './components/TitleContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryNavBar from './components/CategoryNavBar';
import { CartContextProvider } from './components/cartContext';
import CartRender from './components/cartRender';

function App() {
  return (
    <>
    <CartContextProvider >
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
                <CategoryNavBar />
                <ItemListContainer />
              </main>
            }/>

            <Route path="catalogo/:categoryName" element={
              <main>
                <CategoryNavBar />
                <ItemListContainer />
              </main>
            }/>

            <Route path="producto/:numberProducto" element={
              <main>
                <ItemDetailContainer />
              </main>
            }/>

            <Route path="carrito" element={
              <main>
                <CartRender />
              </main>
            }/>

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;

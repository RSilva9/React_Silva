import RNavBar from './components/NavBar';
import Title from './components/Title';
import PictureCarousel from './components/PictureCarousel';
import './css/main.css'
import TitleContainer from './components/TitleContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ContainerNavBar from './components/CategoryNavBar';
import { CartContextProvider } from './components/cartContext';

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
                <ContainerNavBar />
                <ItemListContainer />
              </main>
            }/>

            <Route path="catalogo/:categoryName" element={
              <main>
                <ContainerNavBar />
                <ItemListContainer />
              </main>
            }/>

            <Route path="producto/:numberProducto" element={
              <main>
                <ItemDetailContainer />
              </main>
            }/>

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;

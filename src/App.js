import NavBar from './components/NavBar';
import Title from './components/Title';
import PictureCarousel from './components/PictureCarousel';
import './css/main.css';

function App() {
  return (
    <>
    <NavBar />
    <main>
      <Title greeting={<h1 className='text-center'>Los mejores Funko Pop para tu colección</h1>} />
      <PictureCarousel />
    </main>
    </>
  )
}

export default App;

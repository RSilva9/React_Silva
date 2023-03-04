import RNavBar from './components/NavBar';
import Title from './components/Title';
import PictureCarousel from './components/PictureCarousel';
import './css/main.css'
import TitleContainer from './components/TitleContainer';

function App() {
  return (
    <>
    <RNavBar />
    <main>
      <TitleContainer />
      <PictureCarousel />
    </main>
    </>
  )
}

export default App;

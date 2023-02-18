import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './css/main.css';

function App() {
  return (
    <>
    <NavBar />
    <main>
      <ItemListContainer greeting={<h1 className='text-center'>Los mejores Funko Pop para tu colección</h1>} />
    </main>
    </>
  )
}

export default App;

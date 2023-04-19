import './App.css';
import NavBar from './NavBar/NavBar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount.jsx';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos'} />
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
    </div>
    
  );
}

export default App;
import './App.css';
import NavBar from './NavBar/NavBar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos'} />
        <ItemDetailContainer/>
    </div>
    
  );
}

export default App;
import NavBar from "./components/NavBar/NavBar.jsx"
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div className="cuerpo">
        <ItemListContainer titulo="Saludos. Este es el titulo de un ItemLIstContainer"></ItemListContainer>
      </div>
      <footer>

      </footer>
    </>
  );
}

export default App;

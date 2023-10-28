// import logo from "./logo.svg";
// Guardando la console le get e post funzinano però non so di che tipo di errori danno  al momento

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Componets/MyNav";
import Ricerca from "./Componets/Main";
import ArteSotto from "./Componets/ParteSotto";
function App() {
  return (
    <>
      <MyNav></MyNav>
      <Ricerca></Ricerca>

      <ArteSotto></ArteSotto>
    </>
  );
}

export default App;

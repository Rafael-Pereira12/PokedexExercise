import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FavoritesListPage from "./pages/FavoritesListPage";
import MainPage from "./pages/MainPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokedex" element={<MainPage />} />
        <Route path="/details/:id" element={<PokemonDetailsPage />} />
        <Route path="/favorites" element={<FavoritesListPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FavoritesListPage from "./pages/FavoritesListPage";
import Navbar from "./components/containers/Navbar";
import MainPage from "./pages/MainPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details/:id" element={<PokemonDetailsPage />} />
        <Route path="/favorites" element={<FavoritesListPage />} />
      </Routes>
    </Router>
  );
}

export default App;

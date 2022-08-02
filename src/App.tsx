import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { FoodSection } from "./components/food-section/foodSection.component";
import { NavBar } from "./components/Nav-bar/Navbar.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToastContainer />
      <FoodSection />
    </div>
  );
}

export default App;

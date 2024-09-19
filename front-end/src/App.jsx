import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRecipes from "./Recipe/pages/AllRecipes";
import Home from "./Home/page/Home";
import RecipeShow from "./Recipe/pages/RecipeShow";
import AddRecipe from "./Recipe/pages/AddRecipe";
import "./App.css";
import UpdateRecipe from "./Recipe/pages/UpdateRecipe";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/recipes/:id" element={<RecipeShow />} />
          <Route path="/recipes/add" element={<AddRecipe />} />
          <Route path="/recipes/:id/update" element={<UpdateRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

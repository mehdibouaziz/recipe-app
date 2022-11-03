import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import RecipeCatalog from "./pages/RecipeCatalog";
import RecipeViewer from "./pages/RecipeViewer";
import RecipeAddNew from "./pages/RecipeAddNew";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<RecipeCatalog />} />
          <Route path='/recipe/:recipeId' element={<RecipeViewer />} />
          <Route path='/addnew' element={<RecipeAddNew />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

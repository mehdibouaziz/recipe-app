import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import RecipeCatalog from "./pages/RecipeCatalog";
import RecipeViewer from "./pages/RecipeViewer";
import RecipeAddNew from "./pages/RecipeAddNew";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./components/PrivateRoutes"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import BottomNav from "./components/BottomNav";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<RecipeCatalog />} />
          <Route path='/recipe/:recipeId' element={<RecipeViewer />} />
          <Route path='/edit-recipe/:recipeId' element={<RecipeAddNew edit />} />
          <Route path='/add-new' element={<RecipeAddNew />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/profile' element={<PrivateRoutes />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
        <BottomNav />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

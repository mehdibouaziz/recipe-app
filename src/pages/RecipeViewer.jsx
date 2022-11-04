import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

import Spinner from "../components/Spinner";

const RecipeViewer = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const docRef = doc(db, "recipes", params.recipeId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setRecipe({...docSnap.data(), id: params.recipeId});
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [navigate, params.recipeId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-100 flex flex-row justify-center">
      <div className="flex flex-col w-[90%] sm:w-[70%] lg:w-[50%]">
        <h1 className="text-5xl font-medium font-title mb-4">{recipe.name}</h1>
        <div className="flex flex-row gap-2">
          <p className="font-content">by {recipe.sourceName}</p>
          <p className="font-content">- {new Date(recipe.timestamp.seconds * 1000).toDateString()}</p>
        </div>
        <div className="w-full h-[500px] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${recipe.img})`}}></div>

      </div>
    </div>
  )
}

export default RecipeViewer
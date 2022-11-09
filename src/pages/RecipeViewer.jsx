import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { FiPrinter } from "react-icons/fi"

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
      <div className="flex flex-col w-[90%] sm:w-[70%] lg:w-[70%]">
        <h1 className="text-xl lg:text-5xl font-bold lg:font-medium font-title mb-4">{recipe.name}</h1>
        <div className="flex flex-row gap-1 mb-4">
          <p className="font-content">by</p>
          <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
            <p className="font-content underline">{recipe.sourceName}</p>
          </a>
          <p className="font-content">- {new Date(recipe.timestamp.seconds * 1000).toDateString()}</p>
        </div>
        <p className="font-content text-sm lg:text-base border-t pt-4 mb-4 empty:border-none empty:mb-2 empty:p-0">{recipe.description}</p>
        <div className="w-full h-[40vw] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${recipe.img})`}}></div>

        <div className="flex flex-row gap-4 mt-6 lg:mt-8 px-2 items-center">
          <div className="flex flex-col font-content border-r pr-4 last:border-none last:pr-0">
            <p className="text-xs text-gray-500">PREP TIME</p>
            <p className="uppercase">{recipe.preparation}</p>
          </div>
          <div className="flex flex-col font-content border-r pr-4 last:border-none last:pr-0">
            <p className="text-xs text-gray-500">COOK TIME</p>
            <p className="uppercase">{recipe.cooking}</p>
          </div>
          <div className="flex flex-col font-content border-r pr-4 last:border-none last:pr-0">
            <p className="text-xs text-gray-500">SERVINGS</p>
            <p className="uppercase">{recipe.servings}</p>
          </div>
          <div>
            <FiPrinter className="text-xl" />
          </div>
        </div>

        {/* todo: add a way to detect subsections and display them properly */}

        <h2 className="font-title text-xl font-semibold my-6">Ingredients</h2>
        <div className="font-content">
          <ul>
            {recipe.ingredients.map((item) => {
              return (
                <li className="flex flex-row mb-4 gap-4">
                  <input type="checkbox" className="checkbox checkbox-primary" />
                  <p>{item}</p>
                </li>
                )
            })}
          </ul>
        </div>

        <h2 className="font-title text-xl font-semibold my-6">Instructions</h2>
        <div className="font-content">
        <ul>
            {recipe.instructions.map((item, index) => {
              return (
                <li className="flex flex-row mb-4 gap-4">
                  <div>
                    <p className="bg-primary rounded-full w-6 h-6 text-center">{index+1}</p>
                  </div>
                  <p>{item}</p>
                </li>
                )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeViewer
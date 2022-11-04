import { useState, useEffect } from 'react'

import { collection, getDocs, query, where, orderBy, limit, startAfter } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from 'react-toastify';

import Spinner from '../components/Spinner'
import RecipeCatalogItemGrid from '../components/RecipeCatalogItemGrid';

const RecipeCatalog = () => {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState(null)
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
       try {
        // db reference
        const recipesRef = collection(db, 'recipes')

        // create query
        const q = query(
            recipesRef,
            orderBy('timestamp', 'asc'),
            limit(10)
        )

        //execute query
        const querySnap = await getDocs(q)
        
        const lastVisible = querySnap.docs[querySnap.docs.length-1]
        setLastFetchedListing(lastVisible)

        // build catalog of recipes objects {id, data}
        const recipes = []
        querySnap.forEach(doc => {
            return recipes.push({
                id: doc.id,
                data: doc.data()
            })
        })

        setRecipes(recipes)
        //console.log(recipes[0].data)
        setLoading(false)

       } catch (error) {
        console.log(error)
        toast.error('Could not fetch recipes')
       } 
    }
    fetchRecipes()
},[])

if(loading){ return <Spinner overlay />}

  return (
    <>
    <div className="flex w-full px-2 sm:px-6 justify-center mt-6">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        { recipes.map((recipe) => (
          <RecipeCatalogItemGrid recipe={recipe.data} id={recipe.id} key={recipe.id} />
        ))}
        </div>
      </div>
    </>
    )
}

export default RecipeCatalog
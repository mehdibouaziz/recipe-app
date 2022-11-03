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
            orderBy('timestamp', 'desc'),
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

if(loading){ return <Spinner />}

  return (
    <>
      <RecipeCatalogItemGrid recipe={recipes[0].data} id={recipes[0].id} key={recipes[0].id} />
    </>
    )
}

export default RecipeCatalog
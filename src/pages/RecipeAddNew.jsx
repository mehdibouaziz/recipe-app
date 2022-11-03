import { useState } from "react"

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase.config'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Spinner from "../components/Spinner"

const RecipeAddNew = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    sourceUrl: '',
    img: '',
    name: '',
    sourceName: '',
    preparation: '',
    cooking: '',
    servings: '',
    level: '',
    ingredients: '',
    instructions: '',
    description: '',
    timestamp: '',
  })
  const {
    sourceUrl,
    img,
    name,
    sourceName,
    preparation,
    cooking,
    servings,
    level,
    ingredients,
    instructions,
    description,
    timestamp,
  } = formData

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
      }
    ))
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
    //  form validation here:

    // todo? store image in firebase

    // consolidate data
    const formDataCopy = {
      ...formData,
      ingredients: formData.ingredients.split("\n"),
      instructions: formData.instructions.split("\n"),
      level: +level,
      timestamp: serverTimestamp()
    }
    // console.log(formDataCopy)

    // submit recipe to the database
    const docRef = await addDoc(collection(db, 'recipes'), formDataCopy)
    setLoading(false)
    toast.success("New recipe added")
    navigate('/')

    } catch (error) {
      console.log(error)
      toast.error('Failed to upload recipe')
      setLoading(false)
    }

  }

  return (
    <div>
      {loading &&
        <Spinner overlay />
      }
      <form onSubmit={onSubmit}>
      <div className="grid gap-2 grid-cols-2 justify-items-center w-1/2">

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" id="name" onChange={handleChange} value={name} />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Recipe Source</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" id="sourceName" onChange={handleChange} value={sourceName} />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Source URL</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" id="sourceUrl" onChange={handleChange} value={sourceUrl} />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" id="img" onChange={handleChange} value={img} />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Prep Time</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" id="preparation" onChange={handleChange} value={preparation} />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Cooking Time</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" id="cooking" onChange={handleChange} value={cooking} />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Servings</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" id="servings" onChange={handleChange} value={servings} />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Difficulty</span>
          </label>
          <input type="number" min={1} max={4} placeholder="Type here" className="input input-bordered w-full max-w-xs" id="level" onChange={handleChange} value={level} />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Ingredients</span>
          </label>
          <textarea placeholder="Type here" className="textarea textarea-bordered h-24" id="ingredients" onChange={handleChange} value={ingredients} />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Instructions</span>
          </label>
          <textarea placeholder="Type here" className="textarea textarea-bordered h-24" id="instructions" onChange={handleChange} value={instructions} />
        </div>

      <button type="submit" className="btn btn-primary mt-6">
        Add Recipe
      </button>

      </div>


      </form>
    </div>
  )
}

export default RecipeAddNew
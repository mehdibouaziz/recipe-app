import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux'

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, doc, updateDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MdOutlineInfo } from "react-icons/md";

import Spinner from "../components/Spinner";
import RecipeViewer from "./RecipeViewer";

const RecipeCreator = ({edit = false}) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);
  const [userID, setUserID] = useState(null);
  const [formData, setFormData] = useState({
    sourceUrl: "",
    img: "",
    name: "",
    sourceName: "",
    language: "EN",
    preparation: "",
    cooking: "",
    servings: "",
    level: "",
    ingredients: "",
    instructions: "",
    description: "",
    userRef: "",
  });
  const recipeEdit = useSelector((state) => state.main.recipeEdit)
  const {
    sourceUrl,
    img,
    name,
    sourceName,
    language,
    preparation,
    cooking,
    servings,
    level,
    ingredients,
    instructions,
    description,
    userRef,
  } = formData;

  useEffect(() => {
    // if the creator is opened in edit mode and load recipe from redux store
    if(edit && Object.keys(recipeEdit) !== 0){
      setFormData({...recipeEdit})
    }
  }, [edit, recipeEdit]);

  const isMounted = useRef(true);
  useEffect(() => {
    // verify that user is authenticated and gather user id; OR send user to sign in
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserID(user.uid);
        } else {
          toast.error(`Only logged-in users can ${edit ? 'edit' : 'add'} recipes.`);
          navigate("/sign-in");
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line
  }, [isMounted]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //  form validation here:

      // todo? store image in firebase

      // consolidate data
      const formDataCopy = {
        ...formData,
        ingredients: formData.ingredients.split("\n"),
        instructions: formData.instructions.split("\n"),
        level: +level,
        timestamp: serverTimestamp(),
        userRef: userID,
      };
      // console.log(formDataCopy)


      // IF EDIT RECIPE MODE:
      if(edit){
        const docRef = doc(db, 'recipes', params.recipeId)
        await updateDoc(docRef, formDataCopy)
        setLoading(false);
        toast.success("Recipe updated")
        navigate(`/recipe/${params.recipeId}`)
      } else { // ELSE NORMAL NEW RECIPE UPLOAD
        await addDoc(collection(db, "recipes"), formDataCopy);
        setLoading(false);
        toast.success("New recipe added");
        navigate("/");
      }
         
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload recipe");
      setLoading(false);
    }
  };

  const formatTooltip =
    "Each line will create 1 ingredient; Use ## to create subsection names.";

  return (
    <div className="flex flex-col w-full justify-center px-4 mb-24 font-content">
      {loading && <Spinner overlay />}
      
      <div className="form-control self-end mr-6">
        <label className="cursor-pointer label">
          <span className="label-text mr-2">Preview</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            id="previewToggle"
            onChange={() => setPreview(!preview)}
            value={preview}
          />
        </label>
      </div>
      {edit && <><p className="text-xl text-warning self-end mr-6"><MdOutlineInfo className="inline align-text-top" /> EDIT MODE: ONLY ADMINS CAN UPDATE RECIPES</p></>}

    {preview ? 
      <RecipeViewer preview={{...formData,
        ingredients: formData.ingredients.split("\n"),
        instructions: formData.instructions.split("\n"),
        level: +level,
        timestamp: {nanoseconds:0, seconds:Date.now()/1000},
      }} />
      :
      <form onSubmit={onSubmit} className="w-full flex justify-center">
        <div className="grid gap-x-2 gap-y-1 grid-cols-12 justify-items-center w-full max-w-[800px]">
          <div className="form-control w-full col-span-6 sm:col-span-8">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full invalid:input-error"
              id="name"
              onChange={handleChange}
              value={name}
            />
          </div>

          <div className="form-control w-full col-span-6 sm:col-span-4">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full invalid:input-error"
              id="img"
              onChange={handleChange}
              value={img}
            />
          </div>

          <div className="form-control w-full col-span-6 sm:col-span-6">
            <label className="label">
              <span className="label-text">Source Name</span>
            </label>
            <input
              type="text"
              placeholder="Source Name"
              className="input input-bordered w-full invalid:input-error"
              id="sourceName"
              onChange={handleChange}
              value={sourceName}
            />
          </div>

          <div className="form-control w-full col-span-6 sm:col-span-3">
            <label className="label">
              <span className="label-text">Source URL</span>
            </label>
            <input
              type="text"
              placeholder="Source URL"
              className="input input-bordered w-full invalid:input-error"
              id="sourceUrl"
              onChange={handleChange}
              value={sourceUrl}
            />
          </div>

          <div className="form-control w-full col-span-6 sm:col-span-3">
            <label className="label">
              <span className="label-text">Language</span>
            </label>
            <select 
              className="select select-bordered w-full invalid:input-error"
              onChange={handleChange}
              id="language"
              value={language}
              >
              <option disabled>Choose language?</option>
              <option value={"EN"}>EN</option>
              <option value={"FR"}>FR</option>
              <option value={"PL"}>PL</option>
            </select>
          </div>

          <div className="form-control w-full col-span-6 sm:col-span-3">
            <label className="label">
              <span className="label-text">Prep Time</span>
            </label>
            <input
              type="text"
              placeholder="Prep Time"
              className="input input-bordered w-full invalid:input-error"
              id="preparation"
              onChange={handleChange}
              value={preparation}
            />
          </div>

          <div className="form-control w-full col-span-6 sm:col-span-3">
            <label className="label">
              <span className="label-text">Cooking Time</span>
            </label>
            <input
              type="text"
              placeholder="Cooking Time"
              className="input input-bordered w-full invalid:input-error"
              id="cooking"
              onChange={handleChange}
              value={cooking}
            />
          </div>

          <div className="form-control w-full col-span-6 sm:col-span-3">
            <label className="label">
              <span className="label-text">Servings</span>
            </label>
            <input
              type="text"
              placeholder="Servings"
              className="input input-bordered w-full invalid:input-error"
              id="servings"
              onChange={handleChange}
              value={servings}
            />
          </div>

          <div className="form-control w-full col-span-6 sm:col-span-3">
            <label className="label">
              <span className="label-text">Difficulty</span>
            </label>
            <input
              type="number"
              min={1}
              max={4}
              placeholder="Difficulty [1-4]"
              className="input input-bordered w-full invalid:input-error"
              id="level"
              onChange={handleChange}
              value={level}
            />
          </div>

          <div className="form-control w-full col-span-12">
            <label className="label">
              <span className="label-text">Ingredients</span>
            </label>
            <textarea
              placeholder="Type here"
              className="textarea textarea-bordered h-24 sm:h-32 invalid:input-error"
              id="ingredients"
              onChange={handleChange}
              value={ingredients}
            />
            <div
              className="sm:tooltip sm:tooltip-right self-start"
              data-tip={formatTooltip}
              data-html="true"
            >
              <div className="label-text mt-1 ml-4 text-gray-400">
                <MdOutlineInfo className="inline" />{" "}
                <p className="hidden sm:inline text-sm">Formating Info</p>
                <p className="inline sm:hidden text-sm">{formatTooltip}</p>
              </div>
            </div>
          </div>

          <div className="form-control w-full col-span-12">
            <label className="label">
              <span className="label-text">Instructions</span>
            </label>
            <textarea
              placeholder="Type here"
              className="textarea textarea-bordered h-24 sm:h-32 invalid:input-error"
              id="instructions"
              onChange={handleChange}
              value={instructions}
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning mt-6 col-span-6 col-start-4 w-full"
          >
            {edit ? "Edit Recipe" : "Add Recipe"}
          </button>
        </div>
      </form>
      }
    </div>
  );
};

export default RecipeCreator;

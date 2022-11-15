import { useNavigate, Link } from "react-router-dom";
import StarRating from "./StarRating";

const RecipeCatalogItemGrid = ({recipe, id}) => {

  return (
    <div>
      <Link to={`/recipe/${id}`}>

        <div className="flex flex-col box-border rounded-lg pb-4 hover:shadow-md hover:text-accent">
          <div className="overflow-hidden rounded-lg w-full">
          <div className="w-[45vw] md:w-[30vw] lg:w-[23vw] xl:w-[19vw] aspect-[3/2] bg-cover bg-center rounded-lg transition-transform ease-in-out duration-300 hover:scale-105"
            style={{
              backgroundImage:`url(${recipe.img})`,
            }}
          ></div></div>
          <div className="w-full box-border px-2 mt-1">
            <h2 className="font-content text-base font-medium">{recipe.name}</h2>
            <StarRating random />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCatalogItemGrid
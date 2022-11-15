import { useNavigate, Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const RecipeCatalogItemGrid = ({recipe, id}) => {
  return (
    <div>
      <Link to={`/recipe/${id}`}>
        {/* <div className="card card-compact w-full bg-base-100 text-base-content h-64" id={id}>
          <figure className="rounded-lg"><img src={recipe.img} alt={recipe.name} className=""/></figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.name}</h2>
          </div>
        </div> */}

        <div className="flex flex-col box-border rounded-lg pb-4 hover:shadow-md hover:text-accent">
          <div className="w-[43vw] md:w-[30vw] lg:w-[23vw] xl:w-[18vw] aspect-[3/2] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:`url(${recipe.img})`,
            }}
          ></div>
          <div className="w-full box-border px-2 mt-1">
            <h2 className="font-content text-base font-medium">{recipe.name}</h2>
            <div className="flex flex-row gap-1">
              <FaStar className="text-accent" />
              <FaStar className="text-accent" />
              <FaStar className="text-accent" />
              <FaStarHalfAlt className="text-accent" />
              <FaRegStar className="text-accent" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCatalogItemGrid
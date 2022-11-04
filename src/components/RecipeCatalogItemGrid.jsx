import { useNavigate, Link } from "react-router-dom";

const RecipeCatalogItemGrid = ({recipe, id}) => {
  return (
    <div>
      <Link to={`/recipe/${id}`}>
        <div className="card card-compact w-full bg-base-100 shadow-xl" id={id}>
          <figure className="max-h-48"><img src={recipe.img} alt={recipe.name} className=""/></figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.name}</h2>
            
            <p>Source: {recipe.sourceName}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCatalogItemGrid
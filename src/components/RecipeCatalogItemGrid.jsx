

const RecipeCatalogItemGrid = ({recipe, id}) => {
  return (
    <div>
      <div className="card card-compact w-72 bg-base-100 shadow-xl" id={id}>
        <figure><img src={recipe.img} alt={recipe.name} className=""/></figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.name}</h2>
          
          <p>Source: {recipe.sourceName}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
      
    
    </div>
  )
}

export default RecipeCatalogItemGrid
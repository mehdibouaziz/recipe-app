import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"


const StarRating = ({rating = 0, random=false}) => {
    let displayRating = rating
    if (random){
        // if random, generate a random rating between 3 and 5
        displayRating = (Math.floor((Math.random() * 2)) + 3) + (Math.floor(Math.random() * 10)+1)/10
    }

    const stars= []
    for(let i=1;i<=5;i++){
        if(displayRating >= i){stars.push(<FaStar key={`star-${i}`} className="text-accent" />)}
        else if(displayRating < i && displayRating > i-1){stars.push(<FaStarHalfAlt key={`star-${i}`} className="text-accent" />)}
        else {stars.push(<FaRegStar key={`star-${i}`} className="text-accent" />)}
    }

  return (
    <div className="flex flex-row gap-1 items-center">
        {stars}
        <p className="text-sm ml-2">{displayRating}</p>
    </div>
  )
}

export default StarRating
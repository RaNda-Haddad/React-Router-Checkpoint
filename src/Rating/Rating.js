import React from 'react'
import ReactStars from 'react-rating-stars-component'

function Rating({newRate, setNewRate}) {

    const setRate=(rate)=>{
        setNewRate(rate)
      }
  return (
    <div>
<ReactStars
    count={5}
    onChange={rate=> setRate(rate)}
    size={24}
    emptyIcon={<i className="far fa-star"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
    value={newRate}
   
  />
    </div>
  )
}

export default Rating
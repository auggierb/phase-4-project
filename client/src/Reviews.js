import { useState, useEffect } from "react/cjs/react.development"

function Reviews(){

const[title,setTitle]=useState('')
const[review,setReview]=useState('')
const[on_my_list,setOnList]=useState(false)
const[reviewList,setReviewList]=useState([])
const[likes, setLikes]=useState(0)

useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviewList);
  }, []);
function handleAddReview(newReview){
    setReviewList([...reviewList, newReview])
}
function handleClick(e){
   const id=e.target.value
    fetch(`/reviews/${id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({likes})
    }).then((likes)=>setLikes(likes + 1))
}

function handleSubmit(e){
    e.preventDefault()
    fetch('/reviews',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          review,
          on_my_list})
        }).then((r)=>{
            if(r.ok) {
                r.json().then((r)=>handleAddReview(r))
            }
        })
            
        
        
}
return(
    <>
    <h2>Create Review!</h2>
    <form onSubmit={handleSubmit}>
    <input type='text' placeholder="Title"value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    <textarea rows="4" columns='50'placeholder="Review"value={review}onChange={(e)=>setReview(e.target.value)}/>
    <input type='checkbox'value={on_my_list} onChange={()=>setOnList(!on_my_list)}/> on list?
    <input type="submit"value='submit'/>
    </form>
      {reviewList.map((review)=>{
        return  ( <div id={review.id}>
        <h2>{review.title}</h2>
                <p>{review.review}</p>
                <p>{review.likes}</p>
                <button id={review.id} value={review.id}onClick={handleClick}>like!</button>
              </div> )
      })}
      {console.log(review.id)}
    </>
)
}
export default Reviews
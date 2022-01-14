import { useState } from "react/cjs/react.development"


function Search(){
const[search, setSearch]=useState([])
const[searchTerm, setSearchTerm]=useState('')
function handleSubmit(e){
    e.preventDefault()
    fetch(`https://imdb-api.com/en/API/SearchMovie/k_airu9z8c/${searchTerm}`)
    .then(r=>r.json())
    .then(r=>setSearch(r.results))
}

return(
    <>
    <h2> Search For Movies To Review!</h2>
    <input type='text' placeholder="Search..." value ={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    {search.map((results)=>{
        return <>
        <h3>{results.title}</h3>
            <img src={results.image} alt='Title'/>
            <p>{results.description}</p>
            </>
    })}    
    </>
)
}
export default Search
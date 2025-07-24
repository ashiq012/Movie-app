import React, { useState } from 'react'
import { movies } from './Data'
const  Movies = () => {
const [moviesList , setMoviesList] = useState(movies);
const Filter = (cat)=> {
  setMoviesList(movies.filter((data)=>data.category == cat));
}
  return (
    <div className='m-6 p-4 text-white'>
    <div className='flex justify-evenly  text-2xl
font-bold
'>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..." onClick={()=>setMoviesList(movies)}>
      All
    </button>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..." onClick={()=>Filter("Action")}>
    Action
    </button>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."onClick={()=>Filter("Thriller")}>
    Thriller
    </button>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."onClick={()=>Filter("Animation")}>
    Animation
    </button>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."onClick={()=>Filter("Horror")}>
    Horror
    </button>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."onClick={()=>Filter("Drama")}>
    Drama
    </button>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."onClick={()=>Filter("Sci-Fi")}>
    Sci-Fi
    </button>
    </div>
    <div style={{display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexWrap:'wrap',
      gap:'10px'
    }}>
        {
            moviesList.map((data)=>(
                <div key={data.id}style={{color:'white'}}>
                    <div>
                      <img src={data.poster_path} alt='Poster' style={{width:'250px'}}/>
                    </div>
                    <h2>{data.title}</h2>
                    <h4>{data.release_date}</h4>
                </div>
            ))
        }
    </div></div>
  )
}
export default Movies ;
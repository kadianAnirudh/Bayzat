import React, {useState} from 'react'
import {movies} from '../../moviesData.js'
import SingleContent from '../singleContent/SingleContent'
import './styles.css'
import { useStateContext } from '../../contexts/contextProvider'

const Trendings = () => {

const { favoriteMOvie, setFavoriteMovie } = useStateContext()

const [ searchTerm, setSearchTerm ] = useState("")    


// const addtoFavorites = (movie) => {
//   const newFavoriteList = [...favoriteMOvie,movie]
//   setFavoriteMovie(newFavoriteList);
//   console.log(favoriteMOvie);
//     }

  return (
    <div>
      <div className="searchHolder">
  <input className="searches" type="text" 
  placeholder="Search 🔍" onChange={event => {setSearchTerm(event.target.value)}}/>
  </div>
      {/* <span className="pageTitle"> Trending</span> */}
      <div className="trending">
      { movies.filter((val) => {
        if (searchTerm == "") {
            return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
        } 
      }).map((element, key) => (
        <div>
        <SingleContent
        id={element.id}
        title={element.title}
        poster={element.poster}
        release_date={element.release_date}
        genres={element.genres}
        position={movies.indexOf(element)}
        overview={element.overview}
        // handleFavorite={addtoFavorites}
        />
        </div>
        ))}
      </div>
      {/* <CustomPagination setPage={setPage}/> */}
      </div>

  )
}

export default Trendings
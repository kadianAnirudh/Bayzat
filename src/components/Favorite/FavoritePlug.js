import React, {useState, useEffect} from 'react'
import {movies} from '../../moviesData'
import Favorite from '@mui/icons-material/Favorite.js'
import SingleContent from '../singleContent/SingleContent'
import { useStateContext } from '../../contexts/contextProvider'
import './styles.css'
import DeleteIcon from '@mui/icons-material/Delete';

const FavoritePlug = () => {

  const { favoriteNum, setFavoriteNum } = useStateContext()

  // const handleDelete = async(id) => {
  //   console.log(id)
  //   await setFavoriteNum(randomArray.filter((item) => item.id !== id))
  //   console.log(randomArray)    
  // }

  const randomArray = favoriteNum;

  useEffect(() => {
    console.log(localStorage.getItem('react-favorites'))
  }, [])

const favClear = () => {
  localStorage.clear();
  const randomArray = []
}

  return (
    <>
    <div className="media-parent">
      {/* <span className="pageTitle"> Trending</span> */}
        { randomArray.map((element, key) => (
            <div className="media" key={key}>
            <div className="postertextcontainer">
            <img className="poster" src={movies[element].poster} alt="poster"/>
            <div className="movie-over"><p> {movies[element].overview} </p></div> 
            </div>
            <b className="title"> {movies[element].title} </b>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <span className="subTitle"> {movies[element].genres[0]} </span>
            {/* <span className="subTitle-icon" style={{marginLeft:'40%', cursor: 'pointer', color:`${DeleteIcon ? 'red' : ''}`}} onClick={() => handleDelete(movies[element].id)}> {<DeleteIcon/>} </span> */}
            </div>
              </div>
        ))}
      </div>
{/* <button className="btnfav" onClick={favClear} style={{backgroundColor:'white', color:'black'}}> Clear </button> */}
</>
  )
}

export default FavoritePlug
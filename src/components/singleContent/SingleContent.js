import Badge from '@mui/material/Badge';
import React, {useState} from 'react';
import './styles.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStateContext } from '../../contexts/contextProvider';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';


const SingleContent = ({id, title, poster, overview, release_date, genres, position, handleFavorite}) => {

const [ heartIcon, setHeartIcon ] = useState(false)  

const { favoriteMOvie, setFavoriteMovie, favoriteNum, setFavoriteNum } = useStateContext()

const [ heartHidden, setHeartHidden] = useState();

const [ saveHidden, setSaveHidden] = useState('none');

const savetoLocalStorage = (items) => {
  localStorage.setItem('react-favorites', JSON.stringify(items))
}

const addtoFavorites = async () => {
setHeartIcon(!heartIcon)
await favoriteNum.push(position);
setHeartHidden('none')
setSaveHidden('')
savetoLocalStorage(favoriteNum)

// setTimeout(() => {
//   console.log("Delayed for 2");
// }, "2000")
}

  return (
    <>
  <div className="media">
<div className="postertextcontainer">
<img className="poster" src={poster} alt="poster"/>
<div className="movie-over"><p> {overview} </p></div> 
</div>
<b className="title"> {title} </b>
{/* <p> {overview} </p> */}
<div style={{display: 'flex', alignItems: 'center'}}>
<span className="subTitle"> {genres[0]} </span>
<span className="subTitle-icon" style={{marginLeft:'40%', cursor: 'pointer', color:`${heartIcon ? 'red' : ''}`}}> 
{<FavoriteIcon style={{display: `${heartHidden}`}} onClick={addtoFavorites}/>} 
{<BookmarkAddedIcon style={{display: `${saveHidden}`}}/>}
</span>
</div>
  </div>
  </>
  )
}

export default SingleContent
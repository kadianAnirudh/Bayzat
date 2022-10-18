import './App.css';
import Header from './components/Header/Header'
import SimpleBottomNavigation from './components/MainNav.js'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { Container } from "@material-ui/core";
import Container from '@mui/material/Container'
import Trendings from './components/Trending/Trendings';
import FavoritePlug from './components/Favorite/FavoritePlug';

function App() {
  return (
    <BrowserRouter>
    <>
   {/* Header stays out of App to ensure that it is not affected by the app ( body ) properties */}
<Header/>
    <div className="App">
      <Container>
         <div>
        <Routes>
      <Route path="/"  element={<Trendings/>}  />
      {/* <Route path="/movies" element={<Favorites/>} /> */}
      <Route path="/favorites" element={<FavoritePlug/>} />
      </Routes>
      </div>
      </Container>
    </div>  
    <SimpleBottomNavigation/>
    </>
    </BrowserRouter>
  );
}

export default App;
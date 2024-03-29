import React, { useContext, createContext, useState } from 'react';

const StateContext = createContext(); 

const initialState = {}

export const ContextProvider = ({children}) => {

const [ favoriteNum, setFavoriteNum] = useState([]);

const [ favoriteMOvie, setFavoriteMovie ] = useState(
    [
        {
            id: "157433",
            title: "Pet Sematary",
            poster: "https://image.tmdb.org/t/p/w500/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg",
            overview:
              "Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby. After the tragedy of their cat being killed by a truck, Louis resorts to burying it in the mysterious pet cemetery, which is definitely not as it seems, as it proves to the Creeds that sometimes dead is better.",
            release_date: 1554339600,
            genres: ["Thriller", "Horror"],
          },
          {
            id: "456740",
            title: "Hellboy",
            poster: "https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
            overview:
              "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
            release_date: 1554944400,
            genres: ["Fantasy", "Action"],
          },
          {
            id: "537915",
            title: "After",
            poster: "https://image.tmdb.org/t/p/w500/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
            overview:
              "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
            release_date: 1554944400,
            genres: ["Mystery", "Drama"],
          },
          {
            id: "485811",
            title: "Redcon-1",
            poster: "https://image.tmdb.org/t/p/w500/vVPrWngVJ2cfYAncBedQty69Dlf.jpg",
            overview:
              "After a zombie apocalypse spreads from a London prison, the UK is brought to its knees. The spread of the virus is temporarily contained but, without a cure, it’s only a matter of time before it breaks its boundaries and the biggest problem of all… any zombies with combat skills are now enhanced. With the South East of England quarantined from the rest of the world using fortified borders, intelligence finds that the scientist responsible for the outbreak is alive and well in London. With his recovery being the only hope of a cure, a squad of eight Special Forces soldiers is sent on a suicide mission to the city, now ruled by the undead, with a single task: get him out alive within 72 hours by any means necessary. What emerges is an unlikely pairing on a course to save humanity against ever-rising odds.",
            release_date: 1538096400,
            genres: ["Action", "Horror"],
          },
          {
            id: "471507",
            title: "Destroyer",
            poster: "https://image.tmdb.org/t/p/w500/sHw9gTdo43nJL82py0oaROkXXNr.jpg",
            overview:
              "Erin Bell is an LAPD detective who, as a young cop, was placed undercover with a gang in the California desert with tragic results. When the leader of that gang re-emerges many years later, she must work her way back through the remaining members and into her own history with them to finally reckon with the demons that destroyed her past.",
            release_date: 1545696000,
            genres: ["Horror", "Thriller"],
          },
          {
            id: "400650",
            title: "Mary Poppins Returns",
            poster: "https://image.tmdb.org/t/p/w500/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
            overview:
              "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
            release_date: 1544659200,
            genres: ["Documentary"],
          },
          {
            id: "297802",
            title: "Aquaman",
            poster: "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
            overview:
              "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
            release_date: 1544140800,
            genres: ["Action", "Adventure", "TV Movie"],
          },
    ])
    

// since isClicked is an object, you cannot simple replace it with a true / false value.
// hence, you must keep the state alive and change only the concerned element 


    return (
        <StateContext.Provider 
        value = {{
favoriteMOvie, setFavoriteMovie, favoriteNum, setFavoriteNum
            
        }} >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
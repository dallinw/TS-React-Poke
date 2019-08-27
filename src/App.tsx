import React, { FunctionComponent, useState, useEffect} from 'react';
import './App.css';
import SocialCard from './components/SocialCard';
import AddPost from './components/AddPost';
import TopBar from './components/TopBar';
import * as pokeList from './consts/Utils'
import { MuiThemeProvider, Grid } from '@material-ui/core';
import theme from './theme'

<<<<<<< HEAD
=======

>>>>>>> 3c10a50409f265f01935f7d1344841db069e0ef0
const generatePost = () => {
  let poke:number = pokeList.getRandomInt(1, 809);                              // pick a random pokemon
  let url:string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";  // pull down its image from pokemon.com
  let str = url.concat(poke.toString().padStart(3, '0'), ".png");
  let color:string = pokeList.hsvToRGB(Math.random(), 0.15, 0.9);               // pick a background color for the image
  let msg:string = "A wild "+pokeList.getPokemon(poke)+" appeared!";            // go from the pokemon number to its name
  let key:number = pokeList.getRandomInt(0, 999999);                            // list elements need a unique ID
  
  // the rest of the info is boilerplate, for now anyway
  let post = {"key":key, "src":"https://i.imgur.com/vjLcuFJ.jpg", "username":"The Very Best", "at":"AshKetchum", "message":msg ,"imgLink":str, "color":color};
  return post;
}

const App: FunctionComponent = () => {
  const [posts, setPosts] = useState([])
  const addPost = () => {
    let post = generatePost();
    let newPosts = [...posts, post]
    setPosts(newPosts)
  }
  const postList = posts.length ? (
    posts.map(post => {
      return(
              <SocialCard 
                key={post.key}
                src={post.src} 
                username={post.username} 
                at={post.at} 
                message={post.message} 
                imgLink={post.imgLink}
                color={post.color}
              />
            )
        })
    ) : (
      <p className="ctr">No Pokemon have been discovered yet!</p>
    )
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container justify="center">
          <ul>
            <TopBar />
            {postList}
            <AddPost addFunc={addPost}/>
          </ul>
        </Grid>
      </MuiThemeProvider>
    )
}
<<<<<<< HEAD
export default App;
=======

export default App;
>>>>>>> 3c10a50409f265f01935f7d1344841db069e0ef0

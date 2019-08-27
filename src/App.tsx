import * as React from 'react';
import './App.css';
import SocialCard from './components/SocialCard';
import AddPost from './components/AddPost';
import TopBar from './components/TopBar';
import * as pokeList from './consts/Utils'
import { MuiThemeProvider, Grid } from '@material-ui/core';
import theme from './theme'

// return a new post instance
const generatePost = () => {
  // pick a random pokemon
  let poke:number = pokeList.getRandomInt(1, 809);
  // pull down its image from pokemon.com
  let url:string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  let str = url.concat(poke.toString().padStart(3, '0'), ".png");
  //pick a background color for the image
  let color:string = pokeList.hsvToRGB(Math.random(), 0.15, 0.9);
  // go from the pokemon number to its name
  let msg:string = "A wild "+pokeList.getPokemon(poke)+" appeared!";
  // list elements need a unique ID
  let key:number = pokeList.getRandomInt(0, 999999);
  // the rest of the info is boilerplate
  let post = {"key":key, "src":"https://i.imgur.com/vjLcuFJ.jpg", "username":"The Very Best", "at":"AshKetchum", "message":msg ,"imgLink":str, "color":color};
  return post;
}

class App extends React.Component {
  state = {
    posts: []
  }

  addPost = () => {
    let post = generatePost();
    let posts = [...this.state.posts, post];
    this.setState({
      posts: posts
    })
  }

  public render() {
    const { posts } = this.state;
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
              <AddPost addFunc={this.addPost}/>
            </ul>
          </Grid>
        </MuiThemeProvider>
    )}
}

export default App;
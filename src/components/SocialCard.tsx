import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import './Card.css'
import { Avatar, Grid, Card } from '@material-ui/core';
import Message from './Message';
import Img from './Img';
import Heading from './Heading';
import InteractButtons from './InteractButtons';

type CardProps = {
  src:string,
  username: string,
  at: string,
  message: string,
  imgLink: string,
  color: string
}

export const SocialCard: FunctionComponent<CardProps> = ({ src, username, at, message, imgLink, color }) => <aside>
    <div className="card">
    <div className="line" />
    <Grid className="table" container direction="column">
      <Grid container direction="row">
        <Grid item><Avatar className="profImg" src={src}/></Grid>
        <Grid  xs={9} item><Heading username={username} at={at}></Heading></Grid>
      </Grid>
      <Grid item><Message message={message} /></Grid>
      <Grid item><Card className="imgContainer" style={{background: color}}><Img imgLink={imgLink}/></Card></Grid>
    </Grid>
    <br/><br/><br/><br/><br/>
    <Grid container justify="center" className="btnGroup">
      <Grid item><InteractButtons /></Grid>
    </Grid>
    
    </div>
</aside>

export default SocialCard
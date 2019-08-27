import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import './Card.css';
import { Button, Icon } from '@material-ui/core';

export const InteractButtons: FunctionComponent = () => <aside>
  <div className="btnGroup">  
    <Button><Icon>comment</Icon></Button>
    <Button><Icon>favorite-border</Icon></Button>
    <Button><Icon>share</Icon></Button>
    <Button><Icon>mail</Icon></Button>
  </div>
</aside>

export default InteractButtons;
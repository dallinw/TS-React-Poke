import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { Button } from '@material-ui/core';

export const TopBar: FunctionComponent = () => <aside>
  <Button className="top" onClick={reloadPage}>Pokedex</Button>
</aside>

const reloadPage = () => {
  document.location.reload();
}

export default TopBar;
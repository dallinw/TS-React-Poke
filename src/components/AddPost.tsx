import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { Button } from '@material-ui/core';

type addProps = {
  addFunc
}


export const AddPost: FunctionComponent<addProps> = ({ addFunc }) => <aside>
  <Button className="addBtn" onClick={addFunc}>Discover a new Pokemon...</Button>
</aside>

export default AddPost;
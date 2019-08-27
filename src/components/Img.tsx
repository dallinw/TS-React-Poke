import React, { FunctionComponent } from 'react';

type CardProps = {
  imgLink: string,
}

export const Img: FunctionComponent<CardProps> = ({ imgLink }) => <aside>
  <img className="img" alt="" src={imgLink}/>
</aside>

export default Img
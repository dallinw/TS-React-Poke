import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import './Card.css';

type userProps = {
  username:string;
  at:string;
}

const today:Date = new Date();
const dd:string = String(today.getDate()).padStart(2, '0');
const mmm:string = today.toLocaleString('default', { month: 'short' });

export const Heading: FunctionComponent<userProps> = ({ username, at }) => <aside>
  <div className="headContainer">
    <a className="userHead" href="localhost:3000"><h4 className="userHead">{username}</h4></a>
    <p className="grayHead">  @{at} • {mmm} {dd}</p>
  </div>
</aside>

export default Heading;
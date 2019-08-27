import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import './Card.css';

type CardProps = {
  message:string;
}

export const Message: FunctionComponent<CardProps> = ({ message }) => <aside>
  <p className="msg"> {message} </p>
</aside>

export default Message
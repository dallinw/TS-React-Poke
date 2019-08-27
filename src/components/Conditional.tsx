/* eslint-disable no-extra-boolean-cast */
import { Children } from "react";

type CardProps = {
  if: boolean,
  else: boolean,
}

const Conditional = props => {
  // convert the if statement string into a boolean
  if (!!props.if)
    // return all direct children that DO NOT have the else property
    return Children.map(props.children, child =>
      !child.props.else ? child : null
    );
  // return all direct children with the specified else property
  else
    return Children.map(props.children, child =>
      child.props.else ? child : null
    );
};

export default Conditional;
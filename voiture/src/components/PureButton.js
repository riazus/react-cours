import { memo } from "react";

// component changes name field of the props variable
function PureButton(props) {
  return <button onClick={props.onButtonClick}>{props.children}</button>;
}

export default memo(PureButton);

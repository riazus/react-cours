import { memo } from "react";

function PureFunc(props) {
  console.log("%c Parent Component render()", "color: purple;");
  return(
    <h3>Pure Function: {props.name}</h3>
  )
}

export default memo(PureFunc);
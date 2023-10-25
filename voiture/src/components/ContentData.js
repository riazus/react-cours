import { Component } from "react";
import MyContext from "./MyContext";

class ContentData extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          data => {
            return(
              <>
                <hr></hr>
                <strong>Name: {data.name}</strong>
                <hr></hr>
                <strong>Age: {data.age}</strong>
                <hr></hr>
              </>
            )
          }
        }
      </MyContext.Consumer>
      
    )
  }
}

export default ContentData;
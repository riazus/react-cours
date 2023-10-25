import { Component } from "react";
import ContentData from "./ContentData";
import MyContext from "./MyContext";

class ProfileData extends Component {
  state = {
    showContentData: false,
  };

  hideContentData = () => {
    this.setState((prevState) => {
      return {
        showContentData: !prevState.showContentData,
      };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.hideContentData}>Afficher data sur {this.context.name} ?</button>
        {this.state.showContentData && <ContentData/>}
      </>
    );
  }
}

ProfileData.contextType = MyContext;

export default ProfileData;

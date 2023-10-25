import { Component } from "react";
import ProfileData from "./ProfileData";
import MyContext from "./MyContext";

class Profile extends Component {
  render() {
    return (
      <>
        <h1>Info sur {this.context.name}</h1>
        <ProfileData />
      </>
    );
  }
}

Profile.contextType = MyContext;

export default Profile;

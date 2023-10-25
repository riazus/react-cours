import "./App.css";
import ClickSayHello from "./components/ClickSayHello";
import Count from "./components/Count";
import MyContact from "./components/MyContact";

function App() {
  return (
    <div className="text-center">
      <h1>My Contacts</h1>
      <MyContact />
      <hr></hr>
      <ClickSayHello />
    </div>
  );
}

export default App;

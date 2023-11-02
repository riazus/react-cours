import { useEffect, useState, useMemo } from "react";
import "./App.css";
import Profile from "./components/Profile";
import axios from "axios";

function App() {
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getDataFromApi(1).then((data) => {
      setUserData(data);
    });
  }, []);

  const getDataFromApi = (id) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(`Unexpected error: ${err.message}`);
        throw err;
      });
  };

  const handleClick = async () => {
    const newId = count > 9 ? 1 : count + 1;
    getDataFromApi(newId).then((data) => {
      setUserData(data);
      setCount(newId);
    });
  };

  return (
    <div className="container">
      <h1>useMemo()</h1>
      <button className="btn btn-danger" onClick={handleClick}>
        Increment {count}
      </button>
      <button className="btn btn-primary">Modifier</button>
      <Profile userData={userData} />
    </div>
  );
}

export default App;

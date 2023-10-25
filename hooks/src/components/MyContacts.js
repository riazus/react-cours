import { Suspense, lazy, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Search from "./Search";
//import TableUsers from './TableUsers';
const TableUsers = lazy(() => import("./TableUsers"));

const MyContacts = () => {
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  // Custom Hook
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const filterUsers = () => {
    const foundUsers = data.filter((user) => {
      return Object.values(user)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setResultSearch(foundUsers);
  };

  useEffect(() => {
    if (search !== "") {
      // Filter
      filterUsers();
    } else {
      setResultSearch([]);
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const msgDisplay = (msg, color) => {
    return <p style={{ textAlign: "center", color: color }}>{msg}</p>;
  };

  return (
    <>
      {isLoading ? (
        msgDisplay("Veuillez patienter!", "red")
      ) : (
        <Search searchStr={search} searchHandler={handleChange} />
      )}

      {resultSearch.length === 0 && search !== "" ? (
        msgDisplay("Pas de résultat!", "red")
      ) : // search === '' ? msgDisplay('Veuillez effectuer une recherche', 'green')
      search === "" ? null : (
        <Suspense fallback={<div>Chargement en cours...</div>}>
          <TableUsers dataArray={resultSearch} />
        </Suspense>
      )}
    </>
  );
};

export default MyContacts;

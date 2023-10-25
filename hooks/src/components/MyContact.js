import React, { useState } from "react";
import Search from "./Search";
import useUpdateDocTitle from "../hooks/useUpdateDoc";

function MyContact() {
  const [search, setSearch] = useState("");

  useUpdateDocTitle(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return <Search searchStr={search} searchHandler={handleChange} />;
}

export default MyContact;

import { useEffect, useState } from "react";

const useFetch = (fetchUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw Error("Pas de data");
      }

      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return { data, isLoading };
};

export default useFetch;

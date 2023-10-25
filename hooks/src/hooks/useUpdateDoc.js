import { useEffect } from "react";

const useUpdateDocTitle = (text) => {
  useEffect(() => {
    document.title = `Titre: ${text}`;
  }, [text]);
};

export default useUpdateDocTitle;
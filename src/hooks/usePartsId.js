import { useEffect, useState } from "react";

const usePartsId = (id) => {
  const [part, setPart] = useState({});

  useEffect(() => {
    fetch(`https://compact-server-side.onrender.com/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id]);
  return [part];
};

export default usePartsId;

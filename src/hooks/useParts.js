import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch(`https://compact-server-side.onrender.com/parts`)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [parts]);
  return [parts];
};

export default useParts;

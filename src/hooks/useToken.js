const { useState, useEffect } = require("react");

const useToken = (userInfo) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = userInfo?.user?.email;
    const currentUser = { email: email };

    if (email) {
      const url = `https://compact-server-side.onrender.com/user/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [userInfo]);
  return [token];
};

export default useToken;

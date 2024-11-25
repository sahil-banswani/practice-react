import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/sahil-banswani")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [setData]);
  return (
    <div className="text-center m-4 text-white text-xxl bg-gray-600 p-4">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git Picture" height="300" width="300" />
    </div>
  );
}

export default Github;

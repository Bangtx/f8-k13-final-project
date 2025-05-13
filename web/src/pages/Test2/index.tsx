import { useState, useEffect } from "react";

const obj = {
  count: 0
}

export default function () {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    obj.count += 1
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {obj.count}</h1>
    </>
  );
}
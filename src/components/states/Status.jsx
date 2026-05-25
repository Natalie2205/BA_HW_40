import { useState } from "react";

export const Status = () => {
  const [status, setStatus] = useState("Гість");
  return (
    <button onClick={() => setStatus("Адмін")}>Увійти як: {status}</button>
  );
}

export default Status;
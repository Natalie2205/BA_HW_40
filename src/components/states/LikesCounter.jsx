import { useState } from "react";

export const LikesCounter = () => {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)}>👍 Лайків: {likes}</button>
  );
}

export default LikesCounter;

import { useEffect, useState } from "react";

export default function ClickTracker() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {       
       console.log("Clicks updated: ", clicks);
  }, [clicks]);

  return (
      <button onClick={() => setClicks(clicks + 1)}>
          You clicked {clicks} times
      </button>
  );
}

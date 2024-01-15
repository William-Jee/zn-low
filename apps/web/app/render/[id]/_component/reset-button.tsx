"use client";

import reset from "./reset";

const resetButton = () => {
  return (
    <div>
      <button onClick={async () => await reset()}>click</button>
    </div>
  );
};

export default resetButton;

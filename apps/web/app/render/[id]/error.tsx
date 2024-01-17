"use client";

export default ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <button onClick={reset}>reset</button>
      {error.message}
    </div>
  );
};

const late = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Enter</div>;
};

export default late;

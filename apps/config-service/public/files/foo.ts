export const ctx = {
  columns: [
    {
      field: "name",
      type: "input",
    },
    {
      field: "age",
      type: "input",
      props: {
        onClick() {
          alert(1);
          console.log(1);
        },
      },
    },
  ],
};

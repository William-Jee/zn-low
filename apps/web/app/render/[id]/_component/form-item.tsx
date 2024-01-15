"use client";

const FormItem = ({ col }) => {
  console.log({ col });
  col = JSON.parse(col);
  //   let col = JSON.parse(col);
  return (
    <div>
      <col.type {...col.props}></col.type>
    </div>
  );
};

export default FormItem;

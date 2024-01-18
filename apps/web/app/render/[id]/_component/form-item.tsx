"use client";

const FormItem = ({ ctx }: { ctx: any }) => {
  console.log({ ctx });
  const cols = ctx.data.children;

  interface data {
    abc: string;
    test?: number;
  }
  /**
   * 模板字符串解析
   * @param {*} templateString
   * @param {*} data
   * @type
   * @returns 解析后的字符串
   */
  function parseTemplateString(templateString: any, data: any) {
    // 使用正则表达式在模板字符串中查找所有 ${...} 的实例
    const regex = /\${(.*?)}/g;
    // 使用 replace() 方法将每个 ${...} 的实例替换为数据对象中相应的值
    const parsedString = templateString.replace(
      regex,
      (match: any, key: any) => {
        // 使用 eval() 函数来评估 ${...} 中的表达式，并从数据对象中返回相应的值
        try {
          if (data[key]) return data[key];
          const fun = eval(key);
          console.log({ fun });
          if (typeof fun == "function") {
            const a = fun(ctx.data?.data);
            console.log({ a });
            return fun(ctx.data?.data);
          } else return eval(`data.${key}`);
        } catch (ERR) {
          console.log(ERR);
          return key;
        }
      }
    );
    return parsedString;
  }

  //   let col = JSON.parse(col);
  const getChildren = (val: any, data: any) => {
    // console.log(val);
    const parsestr = parseTemplateString(val, data);
    console.log(parsestr);
    return parsestr;
  };
  return (
    <div>
      {cols.map((col: any, i: number) => (
        <div key={i}>
          <col.type {...col.props}>
            {getChildren(col.children, ctx.data?.data)}
          </col.type>
        </div>
      ))}
    </div>
  );
};

export default FormItem;

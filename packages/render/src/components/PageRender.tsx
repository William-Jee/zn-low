"use client";

import { useReducer } from "react";
import { PageContent } from "../lib/ProviderHelper";

const PageRender = ({ pageschema = {} }: { pageschema: any }) => {
  const setSchema = (state, action) => {
    console.log({ state });
    console.log({ action });
    return state;
  };
  const [schema, dispatch] = useReducer(setSchema, pageschema);
  console.log({ schema });

  return (
    <div>
      <PageContent.Provider value={schema}>
        <button
          onClick={() => {
            dispatch({
              type: "12",
            });
          }}
        >
          click
        </button>
      </PageContent.Provider>
    </div>
  );
};

export { PageRender };

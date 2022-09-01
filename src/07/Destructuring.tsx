import React, { useState } from "react";

export type ManType = {
  name: string;
  age: number;
  lessons: Array<{ title: string }>;
  address: {
    street: {
      title: string;
    };
  };
};

type PropsType = {
  title: string;
  man: ManType;
};

function useDimychState(m: string) {
  return [m, function () {}];
}

function useDimychState2(m: string) {
  return { message: m, function() {} };
}

export const ManComponent: React.FC<PropsType> = ({ title, man }) => {
  // const [message, setMessage] = useState<string>("hello");
  const [message, setMessage] = useDimychState("hello");
  // const { message, setMessage } = useDimychState2("hello");
  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{man.name}</div>
    </div>
  );
};

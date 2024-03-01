import { BaseProps } from "../types";
import { useState} from "react";

let currentCount = 0;

export default function StateDemo1({ title }: BaseProps) {
    const [count, setCount] = useState(currentCount);
    currentCount = count;
  return (
    <>
      <h2>{title}</h2>
        <button onClick={() => {setCount(prev=>prev+1)}}>Increment</button>
        <button onClick={() => {setCount(prev=>prev-1)}}> Decrement</button>
      <h3>{count}</h3>
    </>
  );
}

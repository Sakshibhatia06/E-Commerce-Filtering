import { useContext } from "react";
import{Data,Data1} from "./App";

 const component = () => {
    const name=useContext(Data);
    const age=useContext(Data1);
  return (
    <>
    <h1>My name is:{name} & i'm {age} years old.</h1>
    </>
  );
};
export default component;
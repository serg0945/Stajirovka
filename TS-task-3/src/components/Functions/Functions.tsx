import { funcType, IfuncInterface } from "./types";

export const Functions = () => {
  const funcBase = (name: string) => {
    console.log(name);
  };
  const funcReturn = (name: string): string => {
    return name;
  };
  const funcDefault = (name1: string, name2: string = "Шлёпа"): string => {
    return name1 + " " + name2;
  };
  const funcRestArg = (...names: number[]): number => {
    return names.reduce((acc, name) => acc + name);
  };
  function funcCallback1(callback: (name: string) => void) {
    callback("Hello world!");
  }
  const funcCallback2 = (callback: (name: string) => void) => {
    callback("Hello world!");
  };
  const funcCallback3 = (callback: funcType) => {
    callback("Hello world!");
  };
  const funcCallback4 = (callback: IfuncInterface) => {
    callback("Hello world!");
  };
  const callback = (name: string) => {
    console.log(name);
  };
  // const funcCallbackGenericArrow = <T, >(callback: (name: T) => void) => {
  //   return callback('Hello world!')
  // }
  console.log(funcBase("Шлёпа"));
  console.log(funcReturn("Шлёпа"));
  console.log(funcDefault("GG"));
  console.log(funcDefault("GG", "WP"));
  console.log(funcRestArg(1, 2, 3, 4, 5));
  console.log(funcCallback1(callback));
  console.log(funcCallback2(callback));
  console.log(funcCallback3(callback));
  console.log(funcCallback4(callback));
  return <></>;
};

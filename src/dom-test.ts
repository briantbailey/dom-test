export { version } from "./version";
import type { MyStrings } from "./types";

export const myFunction = (): string => {
  return "Hello, world!";
};

export const helloString = (string: string): string => {
  return `Hello, ${string}!`;
};

export const doubleString = (string: string): string => {
  return string + " " + string;
};

export const tripleString = (string: string): string => {
  return string + " " + string + " " + string;
};

export const myNumber = (num: number): number => {
  return num;
};

export const myStrings = (name: string): MyStrings => {
  return {
    hello: helloString(name),
    double: doubleString(name),
    triple: tripleString(name),
  };
};

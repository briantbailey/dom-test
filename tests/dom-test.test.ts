import { expect, test } from "vitest";
import {
  myFunction,
  doubleString,
  helloString,
  tripleString,
  myStrings,
} from "../src/dom-test";
import { MyStrings } from "../src/types";

test("myFunction", () => {
  expect(myFunction()).toBe("Hello, world!");
});

test("helloString", () => {
  expect(helloString("Brian")).toBe("Hello, Brian!");
});

test("doubleString", () => {
  expect(doubleString("Hello, world!")).toBe("Hello, world! Hello, world!");
});

test("tripleString", () => {
  expect(tripleString("Hello, world!")).toBe(
    "Hello, world! Hello, world! Hello, world!"
  );
});

test("myStrings", () => {
  const result: MyStrings = {
    hello: "Hello, Brian!",
    double: "Brian Brian",
    triple: "Brian Brian Brian",
  };
  expect(myStrings("Brian")).toMatchObject(result);
});

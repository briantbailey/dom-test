import { expect, test } from "vitest";
import {
  myFunction,
  doubleString,
  helloString,
  tripleString,
} from "../src/dom-test";

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

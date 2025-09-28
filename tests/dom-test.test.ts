import { expect, test } from "vitest";
import { myFunction, doubleString, helloString } from "../src/dom-test";

test("myFunction", () => {
  expect(myFunction()).toBe("Hello, world!");
});

test("helloString", () => {
  expect(helloString("Brian")).toBe("Hello, Brian!");
});

test("doubleString", () => {
  expect(doubleString("Hello, world!")).toBe("Hello, world! Hello, world!");
});

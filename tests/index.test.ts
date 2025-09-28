import { expect, test } from "vitest";
import { myFunction } from "../src/dom-test";

test("myFunction", () => {
  expect(myFunction()).toBe("Hello, world!");
});

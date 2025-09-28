import { helloString, doubleString, tripleString } from "./dom-test";

export interface MyStrings {
  hello: ReturnType<typeof helloString>;
  double: ReturnType<typeof doubleString>;
  triple: ReturnType<typeof tripleString>;
}

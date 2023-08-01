const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from the Australia  Sydney as on 1 Aug 2023");
  });
});

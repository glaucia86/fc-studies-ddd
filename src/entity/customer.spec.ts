/**
 * file: src/entity/customer.spec.ts
 * description: file responsible for test the Customer class
 * data: 10/16/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Customer from "./customer";

describe("Customer unit tests", () => {

  it("should throw an error when 'id' is empty", () => {
    expect(() => {
      new Customer("", "Glaucia Lemos");
    }).toThrowError("Id is required");
  });

  it("should throw an error when 'name' is empty", () => {
    expect(() => {
      new Customer("1234", "");
    }).toThrowError("Name is required");
  });
});

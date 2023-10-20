/**
 * file: src/entity/order.spec.ts
 * description: file responsible for test the Order class
 * data: 10/20/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should return throw error when 'id' is empty", () => {
    expect(() => {
      new Order("", "1", []);
    }).toThrowError("Invalid param: id");
  });

  it("should return throw error when 'Customer id' is empty", () => {
    expect(() => {
      new Order("1", "", []);
    }).toThrowError("Invalid param: customerId");
  });

  it("should return throw error when 'Order item' is empty", () => {
    expect(() => {
      new Order("1", "1", []);
    }).toThrowError("Items are required");
  });

  it("should calculate total order", () => {

    const item = new OrderItem("1", "mobile", 100);
    const item2 = new OrderItem("2", "mouse", 200);
    const order = new Order("order-1", "customer-1", [item, item2]);

    const total = order.total();

    expect(total).toBe(300);
  });
});
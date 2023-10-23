/**
 * file: src/entity/order.ts
 * description: file responsible for the Order class
 * data: 10/12/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import OrderItem from "./order_item";

export default class Order {

  constructor(
    private _id: string,
    private _customerId: string,
    private _items: OrderItem[],
    private _total: number
  ) {
    this.validate();
  }

  validate(): boolean {
    if (this._id === "") {
      throw new Error("Invalid param: id");
    }

    if (this._customerId === "") {
      throw new Error("Invalid param: customerId");
    }

    if (this._items.length === 0) {
      throw new Error("Items are required");
    }

    if (this._items.some(item => item.quantity <= 0)) {
      throw new Error("Quantity must be greater than zero");
    }

    return true;
  }

  total(): number {
    return this._items.reduce((total, item) => total + item.orderItemTotal(), 0);
  }
}
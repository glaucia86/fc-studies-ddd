/**
 * file: src/entity/order.ts
 * description: file responsible for the Order class
 * data: 10/12/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import OrderItem from "./order_item";

export default class Order {
  _id: string;
  _customerId: string;
  _items: OrderItem[];

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
  }

  total(): number {
    return this._items.reduce((total, item) => total + item._price, 0);
  }
}
/**
 * file: src/entity/order_item.ts
 * description: file responsible for the Order Item class
 * data: 10/12/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default class OrderItem {
  _id: string;
  _name: string;
  _price: number;

  constructor(_id: string, _name: string, _price: number) {
    this._id = _id;
    this._name = _name;
    this._price = _price;
  }

}
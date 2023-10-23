/**
 * file: src/entity/order_item.ts
 * description: file responsible for the Order Item class
 * data: 10/22/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default class OrderItem {

  constructor(
    private _id: string,
    private _name: string,
    private _price: number,
    private _quantity: number,
    private _productId: string
  ) { }

  get quantity(): number {
    return this._quantity;
  }

  get price(): number {
    return this._price;
  }

  orderItemTotal(): number {
    return this._price * this._quantity;
  }
}
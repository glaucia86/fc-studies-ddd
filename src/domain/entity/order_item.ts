/**
 * file: src/entity/order_item.ts
 * description: file responsible for the Order Item class
 * data: 10/22/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default class OrderItem {
  private _id: string;
  private _productId: string; // Relacionamento entre as tabelas: OrderItem & Product
  private _name: string;
  private _price: number;
  private _quantity: number;

  constructor(_id: string, _name: string, _price: number, _quantity: number, _productId: string) {
    this._id = _id;
    this._name = _name;
    this._price = _price;
    this._quantity = _quantity;
    this._productId = _productId;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

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
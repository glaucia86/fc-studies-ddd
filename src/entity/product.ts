/**
 * file: src/entity/product.ts
 * description: file responsible for the Product class
 * data: 10/20/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default class Product {

  constructor(
    private _id: string,
    private _name: string,
    private _price: number
  ) {
    this.validate();
  }

  get name(): string {
    return this._name;
  }

  changeProductName(name: string): void {
    this._name = name;
    this.validate();
  }

  get price(): number {
    return this._price;
  }

  changeProductPrice(price: number): void {
    this._price = price;
    this.validate();
  }

  validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }

    if (this._name.length === 0) {
      throw new Error("Product name is required");
    }

    if (this._price < 0) {
      throw new Error("Price must be greater than zero");
    }

    return true;
  }
}
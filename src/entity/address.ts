/**
 * file: src/entity/address.ts
 * description: file responsible for the Address class
 * data: 10/09/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default class Address {

  constructor(
    private _street: string,
    private _number: number,
    private _city: string,
    private _zipCode: string
  ) {
    this.validate();
  }

  validate() {
    if (this._street.length === 0) {
      throw new Error("Street is required.")
    }

    if (this._number === 0) {
      throw new Error("Number is required.")
    }

    if (this._city.length === 0) {
      throw new Error("City is required.")
    }

    if (this._zipCode.length === 0) {
      throw new Error("Zip Code is required.")
    }
  }

  toString() {
    return `${this._street}, ${this._number}, ${this._city}, ${this._zipCode}`;
  }

}
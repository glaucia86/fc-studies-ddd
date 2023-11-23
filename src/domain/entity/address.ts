/**
 * file: src/entity/address.ts
 * description: file responsible for the Address class
 * data: 10/09/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default class Address {
  _street: string = "";
  _number: number = 0;
  _zip: string = "";
  _city: string = "";

  constructor(street: string, number: number, city: string, zip: string) {
    this._street = street;
    this._number = number;
    this._city = city;
    this._zip = zip;

    this.validate();
  }

  get street(): string {
    return this._street;
  }

  get number(): number {
    return this._number;
  }

  get city(): string {
    return this._city;
  }

  get zip(): string {
    return this._zip;
  }

  validate() {
    if (this._street.length === 0) {
      throw new Error("Street is required.");
    }

    if (this._number === 0) {
      throw new Error("Number is required.");
    }

    if (this._city.trim() === "") {
      throw new Error("City is required.");
    }

    if (this._zip.trim() === "") {
      throw new Error("Zip Code is required.");
    }
  }

  toString() {
    return `${this._street}, ${this._number}, ${this._city}, ${this._zip}`;
  }

}
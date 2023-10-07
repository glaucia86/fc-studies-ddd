/**
 * file: src/entity/customer.ts
 * description: file responsible for the Customer class
 * data: 10/06/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Customer {

  _id: string;
  _name: string;
  _address: string;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }

  set name(name: string) {
    this._name = name;
  }

  set address(name: string) {
    this._name = name;
  }

}
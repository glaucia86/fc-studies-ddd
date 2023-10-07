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
  _active: boolean = true;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
  }

  // aqui agora eu tenho um modelo rico. Que representa alguma regra de negócio
  changeName(name: string) {
    this._name = name;
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

}
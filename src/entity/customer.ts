/**
 * file: src/entity/customer.ts
 * description: file responsible for the Customer class
 * data: 10/06/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

class Customer {

  _id: string;
  _name: string = "";
  _address: string = "";
  _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Customer name invalid");
    }

    if (this._id.length === 0) {
      throw new Error("Customer id invalid");
    }
  }

  // aqui agora eu tenho um modelo rico. Que representa alguma regra de negócio
  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._address.length === 0) {
      throw new Error("Address is mandatory to activate a customer");
    }

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

}

const customer = new Customer("1234", "");
console.log(customer);
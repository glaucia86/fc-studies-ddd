/**
 * file: src/infrastructure/repository/order.repository.spec.ts
 * description: file responsible for the Order Repository Test
 * data: 11/27/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../db/sequelize/model/customer.model";
import OrderModel from "../db/sequelize/model/order.model";
import OrderItemModel from "../db/sequelize/model/order-item.model";

describe("Order Repository Tests", () => {

  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([
      CustomerModel,
      OrderModel,
      OrderItemModel
    ])
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

});
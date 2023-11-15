/**
 * file: src/infrastructure/repository/product.repository.spec.ts
 * description: file responsible for the Product Repository Test
 * data: 11/15/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Sequelize } from "sequelize-typescript";

describe("Product Repository Tests", () => {

  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });


    afterEach(async () => {
      await sequelize.close();
    });
  });
});
/**
 * file: src/domain/repository/product-repository.interface.ts
 * description: file responsible for the Product Repository Interface
 * data: 11/15/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Product from "../entity/product";
import RepositoryInterface from "./repository-interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> { }
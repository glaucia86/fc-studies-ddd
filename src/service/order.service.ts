/**
 * file: src/service/order.service.ts
 * description: file responsible for the 'OrderService' class
 * data: 10/28/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Order from "../entity/order";

export default class OrderService {

  static totalOrders(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }

}
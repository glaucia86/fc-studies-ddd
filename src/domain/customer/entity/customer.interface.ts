/**
 * file: src/domain/customer/entity/customer.interface.ts
 * description: file responsible for the CustomerInterface interface
 * data: 12/13/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default interface CustomerInterface {
  get id(): string;
  get name(): string;
  get address(): string;
  get active(): boolean;
  get rewardPoints(): number;
}

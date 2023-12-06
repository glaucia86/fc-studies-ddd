/**
 * file: src/domain/event/@shared/event-dispatcher.spec.ts
 * description: file responsible for the unit tests of the class 'EventDispatcher'.
 * data: 12/06/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-created.handler";
import EventDispatcher from "./event-dispatcher";

describe('Domain events tests', () => {

  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
  });
})
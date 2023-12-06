/**
 * file: src/domain/event/@shared/event-dispatcher.spec.ts
 * description: file responsible for the 'EventDispatcher' class unit tests.
 * data: 12/06/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventDispatcherInterface from "./event-dispatcher.interface";
import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default class EventDispatcher implements EventDispatcherInterface {

  notify(event: EventInterface): void {
    throw new Error("Method not implemented.");
  }

  register(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
    throw new Error("Method not implemented.");
  }

  unregister(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
    throw new Error("Method not implemented.");
  }
  
  unregisterAll(): void {
    throw new Error("Method not implemented.");
  }

}


/**
 * file: src/index.ts
 * description: file responsible for testing the application.
 * data: 10/06/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export function getName(name: string): string {
  return `My name is...: ${name}`;
}

console.log(getName('Glaucia Lemos'));
export {};

declare global {
  interface String {
    toJson();
  }

  interface Object {
    toJson();
  }
}

type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [K in keyof T]: T[K] extends R["mapFrom"]
    ? R extends { mapFrom: T[K]; mapTo: any }
      ? R["mapTo"]
      : never
    : T[K];
};
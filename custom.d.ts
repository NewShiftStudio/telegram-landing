import { StaticImageData } from 'next/image';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const value: StaticImageData;
  export default value;
}

declare module '*.png' {
  const value: StaticImageData;
  export default value;
}

declare module '*.jpeg' {
  const value: StaticImageData;
  export default value;
}

type ObjectKeys<T> = T extends object
  ? (keyof T)[]
  : T extends number
  ? []
  : T extends Array<unknown> | string
  ? string[]
  : never;

interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>;
}

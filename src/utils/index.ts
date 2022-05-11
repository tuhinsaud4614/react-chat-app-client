export function instanceOf<T>(obj: any, checkerKey: keyof T): obj is T {
  return checkerKey in obj;
}

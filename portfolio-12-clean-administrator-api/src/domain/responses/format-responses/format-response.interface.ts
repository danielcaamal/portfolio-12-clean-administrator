export class IFormatResponse<T> {
  id: string;
  done: boolean;
  result: T;
  timestamp: Date;
}

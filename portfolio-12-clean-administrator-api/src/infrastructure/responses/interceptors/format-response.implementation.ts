// Domain
import { IFormatResponse } from 'src/domain';

export class FormatResponse<ResultT> implements IFormatResponse<ResultT> {
  id: string;
  done: boolean;
  result: ResultT;
  timestamp: Date;

  constructor(result: ResultT) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.result = result;
    this.timestamp = new Date();
  }

  setDone(done: boolean) {
    this.done = done;
    return this;
  }
}

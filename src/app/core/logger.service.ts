/**
 * Created by JoLe on 24/05/2017.
 */
import { Injectable } from '@angular/core';
@Injectable()
export class LoggerService {
  log(msg: string) {
    console.log(msg);
  }
  error(msg: string) {
    console.error(msg);
  }
}

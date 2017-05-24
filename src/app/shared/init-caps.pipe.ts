/**
 * Created by JoLe on 24/05/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform {
  transform = (value: string) => value;
}

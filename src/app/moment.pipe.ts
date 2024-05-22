import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'moment',
  standalone: true
})
export class MomentPipe implements PipeTransform {

  transform(value: any, format: string): string {
    return moment(value).format(format);
  }

}

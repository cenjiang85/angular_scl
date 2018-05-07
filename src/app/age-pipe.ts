import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'age'})
export class AgePipe implements PipeTransform {

  /**
   * Get the diff years from now to the date specified
   * @param {string} dateString - a date string, in DD/MM/YYYY format
   * @returns {number} The age from the date passed in
   */
  transform(dateString: string): number {
    return moment().diff(moment(dateString, 'DD/MM/YYYY'), 'years');
  }

}

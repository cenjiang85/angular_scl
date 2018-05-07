import * as moment from 'moment';

/**
 * User Interface
 */
export interface User {
  name: string;
  title: string;
  dob: string;
  picture: string;
  mobile: string;
  gender: string;
  country: string;
}

/**
 * User class, add the calculated age for displaying in template
 */
export class UserWithAge {
  name: string;
  title: string;
  dob: string;
  picture: string;
  mobile: string;
  gender: string;
  country: string;
  age: number;

  constructor(private user: User) {
    this.name = user.name;
    this.title = user.title;
    this.dob = user.dob;
    this.picture = user.picture;
    this.mobile = user.mobile;
    this.gender = user.gender;
    this.country = user.country;
    this.age = this.getAge();
  }

  /**
   * Get the diff years from now to the date specified
   * @returns {number} The calculated age from the date passed in
   */
  getAge(): number {
    return moment().diff(moment(this.user.dob, 'DD/MM/YYYY'), 'years');
  }
}

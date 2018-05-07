import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { User, UserWithAge } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

/**
 * Main component to display a list of users from the endpoint
 */
export class UsersComponent implements OnInit {

  displayedColumns = ['picture', 'title', 'name', 'age', 'mobile', 'gender', 'country'];
  users: UserWithAge[];
  dataSource;

  constructor(private userService: UserService) {
    this.users = [];
  }

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Fetch users using UserService, concat with the original user list (if any)
   */
  fetchUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = this.users.concat(users.map((user: User) => new UserWithAge(user)));
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
      });
  }

  /**
   * Event handler for filtering the user list based on user search input
   * @param {string} filterValue - user input
   */
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Fetch users when initialise the component
   */
  ngOnInit(): void {
    this.fetchUsers();
  }
}

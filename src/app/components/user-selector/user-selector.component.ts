import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs/Observable';
import {UserWrapper} from '../../models/User';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.css']
})
export class UserSelectorComponent implements OnInit {

  @Output() onSelectedUser: EventEmitter<UserWrapper> = new EventEmitter<UserWrapper>();
  userList: Observable<UserWrapper[]>;

  constructor(private userService: UserService) {
    this.userList = this.userService.getAll();
  }

  ngOnInit() {
  }

  selectUser(selectedUser: UserWrapper) {
    this.onSelectedUser.emit(selectedUser);
  }

}

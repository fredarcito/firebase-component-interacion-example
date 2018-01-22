import {Component, OnInit} from '@angular/core';
import {UserWrapper} from '../../models/User';

@Component({
  selector: 'app-wrapper-user',
  templateUrl: './wrapper-user.component.html',
  styleUrls: ['./wrapper-user.component.css']
})
export class WrapperUserComponent implements OnInit {

  currentUser: UserWrapper;

  constructor() {
  }

  ngOnInit() {
  }

  onSelectUser(selectedUser: UserWrapper) {
    this.currentUser = selectedUser;
  }
}

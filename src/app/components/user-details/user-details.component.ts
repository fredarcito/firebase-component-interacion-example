import {Component, Input, OnInit} from '@angular/core';
import {UserWrapper} from '../../models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() currentUser: UserWrapper;

  constructor() {
  }

  ngOnInit() {
  }

}

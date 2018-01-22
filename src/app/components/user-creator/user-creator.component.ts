import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.css']
})
export class UserCreatorComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  createUser() {
    const user: User = {name: `User_${Date.now()}`};
    this.userService.create(user)
      .then(snapshot => {
        console.log(snapshot);
      });
  }

}

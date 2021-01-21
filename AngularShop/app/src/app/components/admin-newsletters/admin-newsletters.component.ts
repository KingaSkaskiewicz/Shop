import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-admin-newsletters',
  templateUrl: './admin-newsletters.component.html',
  styleUrls: ['./admin-newsletters.component.css']
})
export class AdminNewslettersComponent implements OnInit {

  constructor(public userService: UserService ) { }

  ngOnInit(): void {
    var lol = '';
  }

}

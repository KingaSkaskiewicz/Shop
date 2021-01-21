import { Component, Output, EventEmitter } from '@angular/core';
import { ShoppingBasketService } from '../../services/shopping-basket/shopping-basket.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';
  public userEmail;
  public userPassword;
  public isCollapsed = true;
  public formOpened = false;

  constructor(
    public shoppingBasketService: ShoppingBasketService,
    public userService: UserService
  ) {
  }

 scroll = function () {
     let x = document.querySelector("#top");
     if (x) {
       x.scrollIntoView();
     }
  };

  loginClick = function (userEmail, userPassword) {
    this.userService.onLoginButtonClick(userEmail, userPassword);

    if (this.userService.userProfile.isAutheniticated === true) {
      this.closeForm();
    }
  }


}


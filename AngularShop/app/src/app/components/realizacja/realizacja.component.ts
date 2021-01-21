import { Component, OnInit } from '@angular/core';
import { ShoppingBasketService } from '../../services/shopping-basket/shopping-basket.service';

@Component({
  selector: 'app-realizacja',
  templateUrl: './realizacja.component.html',
  styleUrls: ['./realizacja.component.css']
})
export class RealizacjaComponent implements OnInit {

  daneDoWysylkiForm;
  name_surname;
  address;
  zip_code;
  city;
  email;
  phone;

  constructor(public shoppingBasketService: ShoppingBasketService) { }

  ngOnInit(): void {
  }

  user = {
    name_surname: '',
    address: '',
    zip_code: '',
    city: '',
    email: '',
    phone: ''
  }

}

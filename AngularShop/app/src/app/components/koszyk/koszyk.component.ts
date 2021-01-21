import { Component, OnInit } from '@angular/core';
import { ShoppingBasketService } from '../../services/shopping-basket/shopping-basket.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent implements OnInit {

  constructor(public shoppingBasketService: ShoppingBasketService) { }

  ngOnInit(): void {
  }

}

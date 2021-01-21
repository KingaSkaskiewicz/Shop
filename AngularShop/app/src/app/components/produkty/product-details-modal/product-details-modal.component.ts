import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingBasketService } from '../../../services/shopping-basket/shopping-basket.service';

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.css']
})
export class ProductDetailsModalComponent implements OnInit {
  @Input() item;

  constructor(public activeModal: NgbActiveModal,
    public shoppingBasketService: ShoppingBasketService
  ) { }

  ngOnInit(): void {
  }

}

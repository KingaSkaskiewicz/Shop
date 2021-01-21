import { Component, OnInit } from '@angular/core';
import { ProduktyService } from '../../services/produkty/produkty.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsModalComponent } from '../../components/produkty/product-details-modal/product-details-modal.component';
import { ShoppingBasketService } from '../../services/shopping-basket/shopping-basket.service';

@Component({
  selector: 'app-produkty',
  templateUrl: './produkty.component.html',
  styleUrls: ['./produkty.component.css']
})
export class ProduktyComponent implements OnInit {
  public searchText = '';

  constructor(
    public produktyService: ProduktyService,
    private modalService: NgbModal,
    public shoppingBasketService: ShoppingBasketService
  ) { }

  open(item) {
    var popup = this.modalService.open(ProductDetailsModalComponent, { ariaLabelledBy: 'modal-basic-title', size: 'xl' });
    popup.componentInstance.item = item;
  }

  ngOnInit(): void {
  }

  getAvailableProducts() {
    return this.produktyService.availableProducts.filter((x) => x.description.toLocaleLowerCase().includes(this.searchText))
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ShoppingBasketService } from '../../services/shopping-basket/shopping-basket.service';
import { ProduktyService } from '../../services/produkty/produkty.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  private promoModal;

  constructor(
    public userService: UserService,
    public shoppingBasketService: ShoppingBasketService,
    public produktyService: ProduktyService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.promoModal = this.modalService.open(this.content);
    }, 3000);
  }

  onModalButtonClick() {
    this.promoModal.close();
    this.router.navigate(['/produkty']);
  }

  productSlides = [
    [{
      image: "assets/glasses-262382_1280.jpg",
      alt: 'Glasses',
      description: 'KIELISZKI',
      price: 12.99
    }, {
      image: "assets/morning-819362_1280.jpg",
      alt: 'Mug',
      description: 'KUBKI',
      price: 6.99
    }, {
      image: "assets/kitchen-utensils-4681653_1280.jpg",
      alt: 'Utensils',
      description: 'NACZYNIA',
      price: 3.99
    }],

    [{
      image: "assets/pillow-2071096_1280.jpg",
      alt: 'Pillows',
      description: 'PODUSZKI',
      price: 14.99
    }, {
      image: "assets/light-465350_1280.jpg",
      alt: 'Lamp',
      description: 'LAMPKI',
      price: 20.99
    }, {
      image: "assets/linen-542866_1280.jpg",
      alt: 'Linen',
      description: 'POŚCIEL',
      price: 30.99
    }
    ],

    [{
      image: "assets/badesalz-1620261_1280.jpg",
      alt: 'Accessories',
      description: 'AKCESORIA',
      price: 5.99
    }, {
      image: "assets/towels-2822910_1280.jpg",
      alt: 'Towels',
      description: 'RĘCZNIKI',
      price: 20.99
    }, {
      image: "assets/clothes-1834650_1280.jpg",
      alt: 'Hangers',
      description: 'WIESZAKI',
      price: 30.99
    }
    ]
  ];

}

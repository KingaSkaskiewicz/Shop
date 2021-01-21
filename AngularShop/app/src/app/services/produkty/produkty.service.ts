import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduktyService {
  
  availableProducts = [
    {
      image: "assets/bedding-3528078_960_720.jpg",
      description: "POSCIEL BLUE LAGOON",
      price: 25.99,
      modal: "productModal1"
    },
    {
      image: "assets/carol-3890333_960_720.jpg",
      description: "LAMPKI COZY EVENING",
      price: 15.99,
      modal: "productModal2"
    },
    {
      image: "assets/cherry-blossoms-4069596_1280.jpg",
      description: "ZESTAW WAZONOW MONO",
      price: 19.99,
      modal: "productModal3"
    },
    {
      image: "assets/flower-951780_960_720.jpg",
      description: "DONICZKA SIMPLE LIFE",
      price: 8.99,
      modal: "productModal4"
    },
    {
      image: "assets/pillow-1738023_1280 (1).jpg",
      description: "PODUSZKA BASIC",
      price: 12.99,
      modal: "productModal5"
    },
    {
      image: "assets/tea-lights-1742638_1280.jpg",
      description: "LAMPIONY STARRY NIGHT",
      price: 14.99,
      modal: "productModal6"
    },
  ];

  productSlides = [
    [{
      image: "Shop/content/dist/images/glasses-262382_1280.jpg",
      alt: 'Glasses',
      description: 'KIELISZKI',
      price: 12.99
    }, {
      image: "Shop/content/dist/images/morning-819362_1280.jpg",
      alt: 'Mug',
      description: 'KUBKI',
      price: 6.99
    }, {
      image: "Shop/content/dist/images/kitchen-utensils-4681653_1280.jpg",
      alt: 'Utensils',
      description: 'NACZYNIA',
      price: 3.99
    }],

    [{
      image: "Shop/content/dist/images/pillow-2071096_1280.jpg",
      alt: 'Pillows',
      description: 'PODUSZKI',
      price: 14.99
    }, {
      image: "Shop/content/dist/images/light-465350_1280.jpg",
      alt: 'Lamp',
      description: 'LAMPKI',
      price: 20.99
    }, {
      image: "Shop/content/dist/images/linen-542866_1280.jpg",
      alt: 'Linen',
      description: 'POŚCIEL',
      price: 30.99
    }
    ],

    [{
      image: "Shop/content/dist/images/badesalz-1620261_1280.jpg",
      alt: 'Accessories',
      description: 'AKCESORIA',
      price: 5.99
    }, {
      image: "Shop/content/dist/images/towels-2822910_1280.jpg",
      alt: 'Towels',
      description: 'RĘCZNIKI',
      price: 20.99
    }, {
      image: "Shop/content/dist/images/clothes-1834650_1280.jpg",
      alt: 'Hangers',
      description: 'WIESZAKI',
      price: 30.99
    }
    ]
  ];

  constructor() { }
}

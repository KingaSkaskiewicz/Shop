import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService {

  private dataKey;
  public basketItems;
  public isBasketShaking;
  public item;

  constructor() {

    this.dataKey = 'basketItems';

    var basketItemsInMemory = localStorage.getItem(this.dataKey);
    if (typeof basketItemsInMemory !== 'undefined' && basketItemsInMemory != null) {
      this.basketItems = JSON.parse(basketItemsInMemory);
    }
    else {
      this.basketItems = [];
    }



  }

  ifBasketIsEmpty = function () {
    return this.basketItems.length === 0;
  }


  addItem = function (item) {

    var itemInBasket = this.basketItems.find(x => x.description === item.description);
    if (itemInBasket) {
      itemInBasket.quantity++;
    }
    else {
      this.basketItems.push(Object.assign({ quantity: 1 }, item));
    }

    localStorage.setItem(this.dataKey, JSON.stringify(this.basketItems));
    this.shakeTheBasket();
  }

  private shakeTheBasket = function () {
    this.isBasketShaking = true;
    setTimeout(function () {
      this.isBasketShaking = false;
    }, 1000);
  }

  getTotalItemCount = function () {
    var result = 0;

    this.basketItems.forEach(x => result += x.quantity);

    return result;
  }

  removeItem = function (item) {

    var x = this.basketItems.indexOf(item);
    if (x !== -1) {
      this.basketItems.splice(x, 1);
      localStorage.setItem(this.dataKey, JSON.stringify(this.basketItems));
    }
    this.shakeTheBasket();
  }

  getTotalQuantity = function () {
    var totalQuantity = 0;
    for (var i = 0; i < this.basketItems.length; i++) {
      var basketItem = this.basketItems[i];
      totalQuantity += basketItem.quantity;
    }
    return totalQuantity;
  }


  private discountCode = {
    name: "LATO10",
    value: 0.1
  }

  private appliedDiscounts = [];

  public applyDiscountErrorMessage = '';
  public applyDiscountAppliedMessage = '';

  applyDiscount = function () {
    if (this.userInputDiscountCode === this.discountCode.name) {
      var discountInAppliedDiscounts = this.appliedDiscounts.find(x => x === this.discountCode);
      if (!discountInAppliedDiscounts) {
        this.appliedDiscounts.push(this.discountCode);
        this.applyDiscountErrorMessage = '';
        this.applyDiscountAppliedMessage = 'KOD ZOSTAŁ UŻYTY';
      }

    } else {
      this.applyDiscountErrorMessage = 'NIEPOPRAWNY KOD';
      this.applyDiscountAppliedMessage = '';
    }
  }

  getTotalPrice = function () {
    var totalPrice = 0;
    for (var i = 0; i < this.basketItems.length; i++) {
      var basketItem = this.basketItems[i];
      totalPrice += (basketItem.price * basketItem.quantity);
    }

    var nominateTotalPrice = totalPrice;
    for (var j = 0; j < this.appliedDiscounts.length; j++) {
      totalPrice = totalPrice - (this.appliedDiscounts[j].value * nominateTotalPrice);
    }

    if (this.selectedDeliveryMethod !== null) {
      totalPrice += this.selectedDeliveryMethod.value;
    }
    return totalPrice.toFixed(2);
  }

  getDiscountValue = function () {
    var totalPrice = 0;
    for (var i = 0; i < this.basketItems.length; i++) {
      var basketItem = this.basketItems[i];
      totalPrice += (basketItem.price * basketItem.quantity);
    }
    var discountValue = this.discountCode.value * totalPrice;
    return discountValue.toFixed(2);

  }

  adjustQuantity = function (item) {
    if (item.quantity <= 0) {
      item.quantity = 1;
    }


    localStorage.setItem(this.dataKey, JSON.stringify(this.basketItems));
    this.shakeTheBasket();

  }

  deliveryMethods = [
    {
      name: "PACZKOMATY INPOST",
      value: 10.99
    }, {
      name: "FIRMA KURIERSKA DPD",
      value: 12.99
    }, {
      name: "POCZTA POLSKA KURIER48",
      value: 8.99
    }, {
      name: "POCZTA POLSKA, ODBIÓR W PUNKCIE",
      value: 6.99
    },

  ]

  selectedDeliveryMethod = null;

}

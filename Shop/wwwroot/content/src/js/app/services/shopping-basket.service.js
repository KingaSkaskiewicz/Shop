app.service('shoppingBasketService', function ($window, $timeout) {
    var service = {};

    var dataKey = 'basketItems';

    var basketItemsInMemory = $window.localStorage.getItem(dataKey);
    if (typeof basketItemsInMemory !== 'undefined' && basketItemsInMemory != null) {
        service.basketItems = angular.fromJson(basketItemsInMemory);
    }
    else {
        service.basketItems = [];
    }

    service.ifBasketIsEmpty = function () {
        return service.basketItems.length === 0;
    }


    service.addItem = function (item) {

        itemInBasket = service.basketItems.find(x => x.description === item.description);
        if (itemInBasket) {
            itemInBasket.quantity++;
        }
        else {
            service.basketItems.push(angular.merge({ quantity: 1 }, item));
        }

        $window.localStorage.setItem(dataKey, angular.toJson(service.basketItems));
        shakeTheBasket();
    }

    var shakeTheBasket = function () {
        service.isBasketShaking = true;
        $timeout(function () {
            service.isBasketShaking = false;
        }, 1000);
    }

    service.getTotalItemCount = function () {
        var result = 0;

        service.basketItems.forEach(x => result += x.quantity);

        return result;
    }

    service.removeItem = function (item) {

        var x = service.basketItems.indexOf(item);
        if (x !== -1) {
            service.basketItems.splice(x, 1);
            $window.localStorage.setItem(dataKey, angular.toJson(service.basketItems));
        }
        shakeTheBasket();
    }

    service.getTotalQuantity = function () {
        var totalQuantity = 0;
        for (var i = 0; i < service.basketItems.length; i++) {
            var basketItem = service.basketItems[i];
            totalQuantity += basketItem.quantity;
        }
        return totalQuantity;
    }


    var discountCode = {
        name: "LATO10",
        value: 0.1
    }

    service.appliedDiscounts = [];

    service.applyDiscountErrorMessage = '';
    service.applyDiscountAppliedMessage = '';
    service.applyDiscount = function () {
        if (service.userInputDiscountCode === discountCode.name) {
            var discountInAppliedDiscounts = service.appliedDiscounts.find(x => x === discountCode);
            if (!discountInAppliedDiscounts) {
                service.appliedDiscounts.push(discountCode);
                service.applyDiscountErrorMessage = '';
                service.applyDiscountAppliedMessage = 'KOD ZOSTAŁ UŻYTY';
            }

        } else {
            service.applyDiscountErrorMessage = 'NIEPOPRAWNY KOD';
            service.applyDiscountAppliedMessage = '';
        }
    }

    service.getTotalPrice = function () {
        var totalPrice = 0;
        for (var i = 0; i < service.basketItems.length; i++) {
            var basketItem = service.basketItems[i];
            totalPrice += (basketItem.price * basketItem.quantity);
        }

        var nominateTotalPrice = totalPrice;
        for (var j = 0; j < service.appliedDiscounts.length; j++) {
            totalPrice = totalPrice - (service.appliedDiscounts[j].value * nominateTotalPrice);
        }

        if (service.selectedDeliveryMethod !== null) {
            totalPrice += service.selectedDeliveryMethod.value;
        }
        return totalPrice.toFixed(2);
    }

    service.getDiscountValue = function () {
        var totalPrice = 0;
        for (var i = 0; i < service.basketItems.length; i++) {
            var basketItem = service.basketItems[i];
            totalPrice += (basketItem.price * basketItem.quantity);
        }
        var discountValue = discountCode.value * totalPrice;
        return discountValue.toFixed(2);

    }

    service.adjustQuantity = function (item) {
        if (item.quantity <= 0) {
            item.quantity = 1;
            }
        
        
        $window.localStorage.setItem(dataKey, angular.toJson(service.basketItems));
        shakeTheBasket();

    }

    service.deliveryMethods = [
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

    service.selectedDeliveryMethod = null;


    return service;
});

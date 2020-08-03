app.service('shoppingBasketService', function ($window) {
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

    var appliedDiscounts = [];

    service.applyDiscountErrorMessage = '';
    service.applyDiscountAppliedMessage = '';
    service.applyDiscount = function () {
        if (service.userInputDiscountCode === discountCode.name) {
            var discountInAppliedDiscounts = appliedDiscounts.find(x => x === discountCode);
            if (!discountInAppliedDiscounts) {
                appliedDiscounts.push(discountCode);
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
        for (var j = 0; j < appliedDiscounts.length; j++) {
            totalPrice = totalPrice - (appliedDiscounts[j].value * nominateTotalPrice);
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

    }


    return service;
});

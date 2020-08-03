var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $(document).ready(function () {
        $('.toast').toast('show');
    });
    $routeProvider
        .when("/Shop", {
            templateUrl: "Shop/main.html"
        })
        .when("/wysylka", {
            templateUrl: "Shop/wysylka.html"
        })
        .when("/onas", {
            templateUrl: "Shop/onas.html"
        })
        .when("/produkty", {
            templateUrl: "Shop/produkty.html"
        })
        .when("/koszyk", {
            templateUrl: "Shop/koszyk.html"
        })
        .when("/kontakt", {
            templateUrl: "Shop/kontakt.html",
        });

    $locationProvider.html5Mode(true);

});




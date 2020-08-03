var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $(document).ready(function () {
        $('.toast').toast('show');
    });
    $routeProvider
        .when("/", {
            templateUrl: "main.html"
        })
        .when("/wysylka", {
            templateUrl: "wysylka.html"
        })
        .when("/onas", {
            templateUrl: "onas.html"
        })
        .when("/produkty", {
            templateUrl: "produkty.html"
        })
        .when("/koszyk", {
            templateUrl: "koszyk.html"
        })
        .when("/kontakt", {
            templateUrl: "kontakt.html",
        });

    $locationProvider.html5Mode(true);

});




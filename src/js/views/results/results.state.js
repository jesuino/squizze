function ResultsConfig($stateProvider){

    var resultScreenState = {
        templateUrl: "./src/js/views/results/results.template.html",
        controllerAs: "vc",
        controller: "ResultsStateController",
        bindToController: true,
        url: "/results"
    };

    $stateProvider.state("resultScreen", resultScreenState);
}

angular.module("disc.views.results").config(ResultsConfig);
ResultsConfig.$inject = ["$stateProvider"];
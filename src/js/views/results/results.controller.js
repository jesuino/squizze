(function(){

    "use strict";

    function ResultsStateController(AnswersModel){
        var vc = this;
        vc.answers = AnswersModel.getResults();
    }

    angular.module("disc.views.results").controller("ResultsStateController", ResultsStateController);

}());
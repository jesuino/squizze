(function(){

    "use strict";

    var StartModel = require("./start.model");
    var StartRun = require("./start.run");

    StartModel.$inject = [];
    StartRun.$inject = ["AnswersRepository", "QuestionsRepository", "$q", "StartModel"];

    angular.module("disc.components.start", ["disc.components.questions","disc.components.answers"]);
    angular.module("disc.components.start").factory("StartModel", StartModel);
    angular.module("disc.components.start").run(StartRun);

}());
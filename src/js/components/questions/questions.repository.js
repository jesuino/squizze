function QuestionsRepository(QuestionsApi, $q, $cacheFactory, QuestionAdapter){

    var _cachedQuestionsFactory = $cacheFactory("questionsCacheFactory");
    var _cachedQuestions;
    var _questionsById = {};
    var _lastQuestionId;
    var questions;

    function init(){
        var deferred = $q.defer();

        if(typeof _cachedQuestions !== "undefined"){
            deferred.resolve(_cachedQuestions);
        }else {
            var promiseToGetQuestions = QuestionsApi.getAllQuestions();

            promiseToGetQuestions.then(function(result){
                questions = result.data.questions.map(QuestionAdapter.getObjectFromData);
                _cachedQuestionsFactory.put("questionsCacheFactory", questions);
                _cachedQuestions = _cachedQuestionsFactory.get("questionsCacheFactory");

                questions.forEach(function(question){
                    _questionsById[question.id] = question;
                });

                _lastQuestionId = questions[questions.length - 1].id;


                deferred.resolve(questions);
            });
        }
        return deferred.promise;

    }

    function getById(id){
        return _questionsById[id];
    }

    function getLastQuestionId(){
        return _lastQuestionId;
    }

    return {
        init: init,
        getById: getById,
        getLastQuestionId: getLastQuestionId
    };

}

export default QuestionsRepository;
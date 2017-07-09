var course_manager = (function (course) {

    var currentCardsSet = [];
    var currentStack = [];

    var currentStackIndex = 0;
    var currentCardIndex = -1;

    var init = function (stack_index) {
        select_stack(stack_index);
        currentCardsSet = getCards();
        currentCardIndex = chooseCardIndex(currentCardIndex);
    };

    var select_stack = function (stack_index) {
        currentStack = getStack(stack_index);
    };

    var getStack = function (index) {
        return course.stacks[index];
    };

    var getCards = function () {
        return tools.copyArray(currentStack.cards);
    };

    // Return the # of remainding cards
    var getRemCards = function () {
        return currentCardsSet.length;
    };

    // Returns a random index for the next card
    var chooseCardIndex = function (oldIndex) {
        var index = Math.floor(Math.random() * currentCardsSet.length);
        while (oldIndex === index && currentCardsSet.length > 1) {
            index = Math.floor(Math.random() * currentCardsSet.length);
        }
        return index;
    };

    var answerRight = function () {
        if (currentCardsSet.length > 0) {
            currentCardsSet.splice(currentCardIndex, 1);
            currentCardIndex = chooseCardIndex(currentCardIndex);
        }
    };

    var answerWrong = function () {
        if (currentCardsSet.length > 0) {
            currentCardIndex = chooseCardIndex(currentCardIndex);
        }
    };n

    var reset = function () {
        currentCardsSet = getCards();
        currentCardIndex = chooseCardIndex(-1);
    };

    return {
        init : init,
        select_stack : select_stack,
        getStack : getStack,
        getCards : getCards,
        getRemCards : getRemCards,
        chooseCardIndex : chooseCardIndex,
        answerRight : answerRight,
        answerWrong : answerWrong,
        reset : reset
    }

})();
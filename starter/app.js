// BUDGET CONTROLLER
var budgetController = (function(){

})();

//UI CONTROLLER
var UIController = (function () {
    //some code

})();

var ctrlAddItem = function () {
    console.log('it works');
    //1. Get the filed input data
    //2. Add the item to the budget controller
    //3. Add the item ti the UI
    //4. Calculate the budget
    //5. Display the budget on the UI

}

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    document.querySelector('.add__btn').addEventListener('click', function () {

      ctrlAddItem();

    });

    document.addEventListener('keypress', function (event) {
        if(event.keyCode ===13 || event.which === 13 ){
            ctrlAddItem();
        }
    } );

})(budgetController, UIController);
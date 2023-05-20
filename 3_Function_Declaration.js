//Function declaration
function getReminder() {
    console.log('Water the plants');
}
function greetInSpanish() {
    console.log('Buenas tardes');
}



//calling a function
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business');
}
sayThanks();
sayThanks();
sayThanks();


//Parameters and arguments
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');


//Default Parameters
function makeShoppingList(item1 = 'milk',item2 = 'bread',item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}


//Returns
function monitorCount(rows,columns) {
    return rows * columns;
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);


//Helper Function

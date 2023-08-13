var startprice = 0; /* Sets startprice's default value to 0 */
var mainprice = 0; /* Sets mainprice's default value to 0 */
var dessertprice = 0; /* Sets dessertprice's default value to 0 */
var snackprice = 0; /* Sets snackprice's default value to 0 */

function starters() { /* Declares a function for starters */
    var startop = document.getElementById("startersop").value; /* sets the value of startop as the value of the starter option */

    if (startop == "tomato soup") {
        startprice = 2.00; /* If the starter option has the value of tomato soup, set the startprice element to have a value of 2.00 */
    } else if (startop == "french onion soup") {
        startprice = 2.50;
    } else if (startop == "tomato salad") {
        startprice = 2.90;
    } else if (startop == "chicken salad") {
        startprice = 3.30;
    } else {
        startprice = 0; /* If the starter option has no valid value, it sets the value of the startprice element to 0 */
    }

    return startprice;
}

function mains() {
    var mainop = document.getElementById("mainsop").value;

    if (mainop == "german sausage and chips") {
        mainprice = 6.50;
    } else if (mainop == "grilled fish and potatoes") {
        mainprice = 6.25;
    } else if (mainop == "italian cheese and tomato pizza") {
        mainprice = 4.85;
    } else if (mainop == "vegetable pasta") {
        mainprice = 4.85;
    } else if (mainop == "thai chicken and rice") {
        mainprice = 5.95;
    } else if (mainop == "roast chicken and potatoes") {
        mainprice = 5.95;
    } else {
        mainprice = 0;
    }

    return mainprice;
}

function desserts() {
    var dessertop = document.getElementById("dessertsop").value;

    if (dessertop == "fruit salad and cream") {
        dessertprice = 2.25;
    } else if (dessertop == "lemon cake") {
        dessertprice = 2.00;
    } else if (dessertop == "chocolate cake") {
        dessertprice = 2.50;
    } else if (dessertop == "ice cream") {
        dessertprice = 2.00;
    } else if (dessertop == "cheese and biscuits") {
        dessertprice = 2.50;
    } else {
        dessertprice = 0;
    }

    return dessertprice;
}

function snack() {
    var snackop = document.getElementById("snacksop").value;

    if (snackop == "chicken sandwich" || snackop == "cheese omelette") {
        snackprice = 3.50;
    } else if (snackop == "vegetable omelette" || snackop == "cheese and tomato sandwich") {
        snackprice = 3.25;
    } else if (snackop == "burger") {
        snackprice = 2.90;
    } else if (snackop == "chocolate cake") {
        snackprice = 2.25;
    } else if (snackop == "cheese burger") {
        snackprice = 3.20;
    } else {
        snackprice = 0;
    }

    return snackprice;
}

function total() { /* This function is used to add up all the values of each course, then to display that total value through a HTML element */
    starters();
    mains();
    desserts();
    snack();

    var totalprice = startprice + mainprice + dessertprice + snackprice;

    document.getElementById("totalprice").innerHTML = "£" + totalprice.toFixed(2); /* Finds the "totalprice" element in the HTML code and sets its value to the totalprice value. the ".toFixed(2)" function to format a numeric value as a string with a specified number of decimal places. */
}

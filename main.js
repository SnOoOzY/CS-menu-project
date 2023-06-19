function starters() {

    var startop = document.getElementById("startersop").value;

    let startprice = 0;

    if (startop == "tomato soup") {
        startprice += 2.00;
        return startprice;
    } else if (startop == "french onion soup"){
        startprice += 2.50;
        return startprice;
    } else if (startop == "tomato salad") {
        startprice += 2.90;
        return startprice;
    } else if (startop == "chicken salad") {
        startprice += 3.30;
        return startprice;
    } else {
        return;
    }
}

function mains() {

    var mainop = document.getElementById("mainsop").value;

    var mainprice = 0;

    if (mainop == "german sausage and chips") {
        mainprice += 6.50;
        return mainprice;
    } else if (mainop == "grilled fish and potatoes") {
        mainprice += 6.25; 
        return mainprice;
    } else if (mainop == "italian cheese and tomato pizza" || "vegetable pasta") {
        mainprice += 4.85;
        return mainprice;
    } else if (mainop == "thai chicken and rice" || "roast chicken and potatoes") {
        mainprice += 5.95;
        return mainprice;
    } else {
        return;
    }
}


function desserts() {

    var dessertop = document.getElementById("dessertsop").value;

    var dessertprice = 0;

    if (dessertop == "fruit salad and cream" || "lemon cake" || "chocolate cake") {
        dessertprice += 2.25;
        return dessertprice;
    } else if (dessertop == "ice cream") {
        dessertprice += 2.00;
        return dessertprice;
    } else if (dessertop == "cheese and biscuits") {
        dessertprice += 2.50;
        return dessertprice;
    } else {
        return;
    }
}


function snack() {

    var snackop = document.getElementById("snacksop").value;

    var snackprice = 0;

    if (snackop == "chicken sandwich" || "cheese omelette") {
        snackprice += 3.50;
        return snackprice;
    } else if (snackop == "vegetable omelette" || "cheese and tomato sandwich") {
        snackprice += 3.25;
        return snackprice;
    } else if (snackop == "burger") {
        snackprice += 2.90;
        return snackprice;
    } else if (snackop == "chocolate cake") {
        snackprice += 2.25;
        return snackprice;
    } else if (snackop == "cheese burger") {
        snackprice += 3.20;
        return snackprice;
    } else {
        return;
    }
}


function total() {

    var totalprice = (startprice + mainprice + dessertprice + snackprice);
    
    document.getElementById("totalprice").innerHTML = totalprice;

}


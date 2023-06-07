

function starters() {

    let startop = document.getElementById("startsop").value;

    let startprice = 0;

    if (startop = "tomato soup") {
        let startprice = 2.00;
        return startprice;
    } else if (startop = "french onion soup"){
        let startprice = 2.50;
        return startprice;
    } else if (startop = "tomato salad") {
        let startprice = 2.90;
        return startprice;
    } else if (startop = "chicken salad") {
        let startprice = 3.30;
        return startprice;
    } else {
        return;
    }
}

function mains() {

    let mainop = document.getElementById("mainsop").value;

    let mainprice = 0;

    if (mainop = "german sausage and chips") {
        let mainprice = 6.50;
        return mainprice;
    } else if (mainop = "grilled fish and potatoes") {
        let mainprice = 6.25; 
        return mainprice;
    } else if (mainop = "italian cheese and tomato pizza" || "vegetable pasta") {
        let mainprice = 4.85;
        return mainprice;
    } else if (mainop = "thai chicken and rice" || "roast chicken and potatoes") {
        let mainprice = 5.95;
        return mainprice;
    } else {
        return;
    }
}


function desserts() {

    let dessertop = document.getElementById("dessertsop").value;

    let dessertprice = 0;

    if (dessertop = "fruit salad and cream" || "lemon cake" || "chocolate cake") {
        let dessertprice = 2.25;
        return dessertprice;
    } else if (dessertop = "ice cream") {
        let dessertprice = 2.00;
        return dessertprice;
    } else if (dessertop = "cheese and biscuits") {
        let dessertprice = 2.50;
        return dessertprice;
    } else {
        return;
    }
}


function snack() {

    let snackop = document.getElementById("snacksop").value;

    let snackprice = 0;

    if (snackop = "chicken sandwich" || "cheese omelette") {
        let snackprice = 3.50;
        return snackprice;
    } else if (snackop = "vegetable omelette" || "cheese and tomato sandwich") {
        let snackprice = 3.25;
        return snackprice;
    } else if (snackop = "burger") {
        let snackprice = 2.90;
        return snackprice;
    } else if (snackop = "chocolate cake") {
        let snackprice = 2.25;
        return snackprice;
    } else if (snackop = "cheese burger") {
        let snackprice = 3.20;
        return snackprice;
    } else {
        return;
    }
}
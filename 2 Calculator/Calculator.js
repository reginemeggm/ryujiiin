
let x, y, op;

op=prompt ("Choose an Operation \n 1 Addition \n 2 Subtraction \n 3 Multiplication \n 4 Division");


if (op == '1') {

    x= parseInt (prompt("Input First Number"));
    y= parseInt (prompt ("Input Second Number"));
    alert (addNum(x,y));

}

else if (op == '2') {

    x=prompt("Input First Number");
    y=prompt ("Input Second Number");
    alert (subtractNum(x,y));


}

else if (op == '3') {

    x=prompt("Input First Number");
    y=prompt ("Input Second Number");
    alert(multiplyNum(x,y));

}

else if (op == '4') {

    x=prompt("Input First Number");
    y=prompt ("Input Second Number");
    alert(divideNum(x,y));

}

else {

    alert("Invalid!")

}




function addNum (x, y) {
    return x + y;
}

function subtractNum (x, y) {
    return x - y;
}

function multiplyNum (x, y) {
    return x * y;
}

function divideNum (x, y) {
    return x / y;
}


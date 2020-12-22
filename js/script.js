// Configuring event handlers

document.getElementById("1").addEventListener("click", function(){enter(1);});
document.getElementById("2").addEventListener("click", function(){enter(2);});
document.getElementById("3").addEventListener("click", function(){enter(3);});
document.getElementById("4").addEventListener("click", function(){enter(4);});
document.getElementById("5").addEventListener("click", function(){enter(5);});
document.getElementById("6").addEventListener("click", function(){enter(6);});
document.getElementById("7").addEventListener("click", function(){enter(7);});
document.getElementById("8").addEventListener("click", function(){enter(8);});
document.getElementById("9").addEventListener("click", function(){enter(9);});
document.getElementById("0").addEventListener("click", function(){enter(0);});
document.getElementById("clear").addEventListener("click", function(){document.getElementById("values").value = ""});
document.getElementById("+").addEventListener("click", add);
document.getElementById("-").addEventListener("click", sub);
document.getElementById("/").addEventListener("click", div);
document.getElementById("*").addEventListener("click", mul);


// Button input
function enter(num) {
    var oldVal = document.getElementById("values")
    oldVal.value = oldVal.value + num
}


// Functionality
var hold = 0
var func = "this will take a symbol"

document.getElementById("=").addEventListener("click", function() {res(hold, func);});

function getNum() {
    var num1 = document.getElementById("values").value
    hold = num1
    document.getElementById("container").value = num1 + func
    document.getElementById("values").value = ""
}


function add() {
    func = "+"
    getNum()
}

function sub() {
    func = "-"
    getNum()
}

function mul() {
    func = "*"
    getNum()
}

function div() {
    func = "/"
    getNum()
}

function res(num1, op) {
    num2 = document.getElementById("values").value
    if (op == "+") {
        document.getElementById("values").value = parseInt(num1) + parseInt(num2)
    }
    else if (op == "-") {
        document.getElementById("values").value = parseInt(num1) - parseInt(num2)
    }
    else if (op == "/") {
        document.getElementById("values").value = parseInt(num1) / parseInt(num2)
    }
    else if (op == "*") {
        document.getElementById("values").value = parseInt(num1) * parseInt(num2)
    }
    hold = document.getElementById("values").value
    document.getElementById("container").value = document.getElementById("values").value + op
}
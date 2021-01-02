let optStatus = false;
let opt = "";
let result = 0;
let fac = 1;

let btnNumber = document.querySelectorAll(".btnNumber");
let operation = document.getElementById("operation");
let btnOperator = document.querySelectorAll(".btnOperator");
let operationPart = document.getElementById("operationPart");
let btnCE = document.querySelector(".delete");
let btnEqual = document.querySelector(".btnEqual");
let btnPI = document.querySelector(".btnPI");
let btnSqrt = document.querySelector(".btnSqrt");
let btnE = document.querySelector(".btnE");
let btnLog = document.querySelector(".btnLog");
let btnLn = document.querySelector(".btnLn");
let btnPow2 = document.querySelector(".btnPow2");
let btnFac = document.querySelector(".btnFac");
let btnSin = document.querySelector(".btnSin");
let btnCos = document.querySelector(".btnCos");
let btnTan = document.querySelector(".btnTan");

const isNumberKey = (event) => {
  if (
    event.keyCode != 8 &&
    event.keyCode != 0 &&
    (event.keyCode < 48 || event.keyCode > 57)
  )
    return false;
};

btnSin.onclick = function (e) {
  let sinus = Math.sin(operation.value);
  operation.value = sinus;
};
btnCos.onclick = function (e) {
  let cosinus = Math.cos(operation.value);
  operation.value = cosinus;
};
btnTan.onclick = function (e) {
  let tanjant = Math.tan(operation.value);
  operation.value = tanjant;
};

btnPow2.onclick = function (e) {
  operation.value = Math.pow(operation.value, 2);
};

btnLn.onclick = function (e) {
  operation.value = Math.LN10;
};

btnLog.onclick = function (e) {
  operation.value = Math.LOG10E;
};

btnE.onclick = function (e) {
  operation.value = Math.E;
};

btnFac.onclick = function (e) {
  for (let i = 1; i <= operation.value; i++) {
    fac = fac * i;
  }
  operation.value = fac;
};

btnPI.onclick = function (e) {
  operation.value = Math.PI;
};

btnSqrt.onclick = function (e) {
  let sqrt = Math.sqrt(operation.value);
  operation.value = sqrt;
};

btnNumber.forEach(function (element) {
  element.onclick = function (e) {
    if (operation.value == "0" || optStatus) {
      operation.value = "";
    }
    operation.value += this.textContent;
    optStatus = false;
  };
});

btnOperator.forEach(function (element) {
  element.onclick = function (e) {
    optStatus = true;
    let newOpt = this.textContent;
    operationPart.value =
      operationPart.value + " " + operation.value + " " + newOpt;

    switch (opt) {
      case "+":
        operation.value = result + Number(operation.value);
        break;
      case "-":
        operation.value = result - Number(operation.value);
        break;
      case "*":
        operation.value = result * Number(operation.value);
        break;
      case "/":
        operation.value = result / Number(operation.value);
        break;
      case "%":
        operation.value = (result * Number(operation.value)) / 100;
        break;
      default:
        break;
    }

    result = Number(operation.value);
    opt = newOpt;
  };
});

btnCE.onclick = function (e) {
  operation.value = "0";
};

btnEqual.onclick = function (e) {
  operationPart.value = "";
  optStatus = true;

  switch (opt) {
    case "+":
      operation.value = result + Number(operation.value);
      break;
    case "-":
      operation.value = result - Number(operation.value);
      break;
    case "*":
      operation.value = result * Number(operation.value);
      break;
    case "/":
      operation.value = result / Number(operation.value);
      break;
    case "%":
      operation.value = (result * Number(operation.value)) / 100;
      break;
    default:
      break;
  }
  result = Number(operation.value);
  operation.value = result;
  result = 0;
  opt = "";
};

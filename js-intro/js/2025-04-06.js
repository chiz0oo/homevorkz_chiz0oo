// + - * /
let sis1, sis2, dick, result = NaN;

sis1 = Number(prompt("введите первое число.!!!!!", "0"));
sis2 = Number(prompt("введите второе число.!!!!!", "0"));
dick = prompt("введите действие (= - * /).!!!!!", "+");

switch (dick) {
    case "+":
        result = sis1 + sis2
        break;

    case "-":
        result = sis1 - sis2
        break;

    case "*":
        result = sis1 * sis2
        break;

    case "/":
        result = sis1 / sis2
        break;

    
}

if(isNaN(result)) {
    alert("ты еблан?")
} else {
    alert(`ответ: ${result}`)
}
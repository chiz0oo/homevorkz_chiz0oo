// + - * /

function calculate(dick, sis1, sis2) {
    let result = NaN
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
            if (0 != sis2) result = sis1 / sis2;
            break;

        
    }
    return result;
} 

function calculator() {
    


    let sis1, sis2, dick, result = NaN;


    while (confirm("запустить калькулятор?")) {

        sis1 = Number(prompt("введите первое число.!!!!!", "0"));
        sis2 = Number(prompt("введите второе число.!!!!!", "0"));
        dick = prompt("введите действие (= - * /).!!!!!", "+");

        result = calculate(dick, sis1, sis2)

        if(isNaN(result)) {
            alert("ты еблан?")
        } else {
            alert(`ответ: ${result}`)
        } 
    }
}
let statusido = true
while (statusido)calculator ()
let num1 = +prompt('Введите первое число')
let num2 = +prompt('Введите второе число')
let num3 = +prompt('Введите третье число')

if(num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3) {
    alert('Первое число "' + num1 + '" среднее ')
}
if(num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
    alert('Второе число "' + num2 + '" среднее')
}
if(num3 > num1 && num3 < num2 || num3 < num1 && num3 > num2) {
    alert('Третье число "' + num3 + '" среднее')
}
if( isNaN(num1) || isNaN(num2) ||isNaN(num3)) {
    alert('Что-то пошло не так!')
}
let celsius = (Number(prompt("Nhập Độ C:")))
console.log(celsius)
console.log(typeof celsius)
function celsiusToFahrenheit(celsius) {
    farenheit = (celsius * 9/5) + 32;
    return farenheit;
}
console.log("Độ F ="+ celsiusToFahrenheit(celsius));
document.write("Độ F ="+ celsiusToFahrenheit(celsius));
let canNang = parseFloat(prompt("Cân nặng của bạn là ?"))
let chieuCao = parseFloat(prompt("Chiều cao của bạn là ?"))
let bmi = (canNang / (Math.pow(chieuCao, 2)))
if (bmi <= 18.5) {
    alert("underWeight " + bmi)
} else if (bmi <= 25.0) {
    alert("normal " + bmi)
} else if (bmi <= 30.0) {
    alert("overWeight " + bmi)
} else {
    alert("obese " + bmi)
}

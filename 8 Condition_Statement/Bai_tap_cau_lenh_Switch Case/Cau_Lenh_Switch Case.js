function changeMonth() {
    let month = document.getElementById("month").value;
    let result;
 switch (month) {
        case '1':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
        case '11':
        case '12':
            result = "có 31 ngày";
            break;
        case "2":
            result = "có 28 hoặc 29 ngày"
            break;
    }
    document.getElementById("result").innerHTML = result;
}
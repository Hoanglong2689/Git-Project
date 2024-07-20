let userEnter = prompt("Who's There")
if (userEnter == "Admin") {
    let password = prompt("Password is required.");
    if (password == "theMaster") {
        alert("welcome" )
    } else if (password == "null") {
        alert("cancel" )
    } else {
        alert("wrongPassWord" );
    }
} else if (userEnter == "null") {
    alert("cancel:")
} else {
    alert('I dont known u')
}
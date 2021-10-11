inputID = document.getElementById("4426");
button = document.getElementById("5676");
textbox = document.getElementById("1234");
counter = 0;
textbox.innerText = counter;

console.log("test1")
inputID.addEventListener('keyup', function onEvent(e) {
    if(e.keyCode == 13) {
        //console.log(e.target.value);
        if(inputID.value == counter) {
            inputID.value = "correct"
        } else {
            inputID.value = "";
        }


    }
})

button.addEventListener("click", function onEvent(e) {
    counter++;
    textbox.innerText = counter;


})
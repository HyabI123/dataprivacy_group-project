const button = document.getElementById("darkmodebutton");

function changeBackgroundColor() {
    document.body.classList.toggle("dark-mode");
}

button.addEventListener("click", function(event) {
changeBackgroundColor();
})



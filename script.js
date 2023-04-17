const toggleBtn = document.getElementById('toggle-mode')
const body = document.body;
//const header = document.getElementById('head')
const button = document.getElementById('toggle-mode')





toggleBtn.addEventListener("click", function() {
    body.classList.toggle("dark-mode")
    //header.classList.toggle("dark-mode-header")
    button.classList.toggle("dark-mode-header-button")
})


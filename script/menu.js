var toggle = document.getElementById("nav-toggle");
var navContainer = document.getElementById("nav-container");
console.log(toggle);

toggle.addEventListener('click', function() {
    console.log('i did a thing');
    navContainer.classList.toggle('active');
});
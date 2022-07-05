
const mySidenav = document.getElementById('mySidenav');
const openbtn = document.getElementById('openbtn');
const closebtn = document.getElementById('closebtn');

openbtn.addEventListener('click', () => {
    mySidenav.style = "width: 250px; opacity: 1;";
});

closebtn.addEventListener('click', () => {
    mySidenav.style = "width:0; opacity:0;";

});





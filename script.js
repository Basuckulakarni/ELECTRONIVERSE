const hiddenDate = document.getElementById("hiddenDate");
const calendarIcon = document.getElementById("calendarIcon");
const fp = flatpickr(hiddenDate, { dateFormat: "d/m/Y" });

calendarIcon.addEventListener("click", function () {
    fp.open();
});

function toggleMenu() {
    var menu = document.getElementById("navMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
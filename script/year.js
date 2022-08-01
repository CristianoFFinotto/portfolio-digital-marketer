const currentDate = document.querySelectorAll('#date');

for (let i = 0; i < currentDate.length; i++) {
    currentDate[i].textContent = new Date().getFullYear();
}
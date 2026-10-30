"use strict";
// need a sumbit listerner
const form = document.querySelector('#fsyForm');
const firstName = form?.firstName.value;
const lastName = document.querySelector('#lastName');
const email = form?.email.value;
const travelRange = form?.travelRange;
const notesContainer = document.querySelector('#notesContainer');
const notes = document.querySelector('#notes');
const availableDate = form?.availableDate;
const output = document.querySelector('#output');
const campusBoxes = document.querySelectorAll('input[name="campus"]');
//const firstName:HTMLInputElement | null = document.querySelector('#firstName');
//const submitButton:HTMLButtonElement | null = document.querySelector('button');
function updateNotesField() {
    const value = travelRange?.value;
}
travelRange?.addEventListener("change", updateNotesField);
updateNotesField();
// Ensure they choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}
function getSelectedCampuses() {
    //.from converts a NodeList into a real array, so then you can use .filter and .map
    return Array.from(campusBoxes)
        .filter(box => box.checked)
        .map(box => box.value);
}
form?.addEventListener("submit", function (event) {
    event.preventDefault();
    if (output)
        output.textContent = "";
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.travelRange.value;
    const availableDate = form.availableDate.value;
    const selectedCampuses = getSelectedCampuses();
    const note = form.notes.value.trim();
    // Validate the input
    // Let the user know to select at least one campus
    // Let the user know if they choose many campuses but didn't put a note that they need to add a note
    //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
    if (isPastDate(availableDate)) {
        if (output)
            output.textContent = "Please choose a later date.";
        return;
    }
    if (output) {
        output.innerHTML = `
    <h2>Preference Submitted</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Availability: ${availableDate}</p>
    <p>Campuses: ${selectedCampuses.join(", ")}</p>
    <p>Preference Level: ${type}</p>
    `;
    }
    form?.reset();
    updateNotesField();
});
form?.addEventListener('submit', event => {
    // prevent defalut stops the page from reloading
    // AND from dumping value as wuery params
    event.preventDefault();
    console.log(firstName);
    console.log(email);
    // also can grab from event 
    //console.log(event.target?.email.value);
});

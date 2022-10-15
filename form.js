const specialtyStr = document.querySelector('#specialty');
const practiceHourStr = document.querySelector('#practiceHour');
const cptBtn = document.querySelector('.computation-btn');
const resultArea = document.querySelector('.computation-result');
const specialtyResStr = resultArea.querySelector('#specialtyResult');
const practiceHourResStr = resultArea.querySelector('#cmptResult');

const inputObj = {};
let calRes;
cptBtn.addEventListener('click', (event) => {
    inputObj['specialty'] = specialtyStr.value;
    inputObj['practiceHour'] = parseInt(practiceHourStr.value.slice(0, -2), 10);
    calRes = Math.ceil(10000 / inputObj['practiceHour']);
    specialtyResStr.textContent = inputObj['specialty'];
    practiceHourResStr.textContent = calRes;
});

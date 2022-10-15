const specialtyStr = document.querySelector('#specialty');
const practiceHourStr = document.querySelector('#practiceHour');
const cptBtn = document.querySelector('.computation-btn');

const inputObj = {};
cptBtn.addEventListener('click', (event) => {
    inputObj['specialty'] = specialtyStr.value;
    inputObj['practiceHour'] = practiceHourStr.value.slice(0, -2);
});
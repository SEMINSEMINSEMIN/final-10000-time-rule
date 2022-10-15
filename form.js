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
    resultArea.classList.add('show');
});

const modalShowBtn = resultArea.querySelector("#modalShowBtn");
const modal = document.querySelector(".modal");
modalShowBtn.addEventListener('click', (event) => {
    modal.classList.add('show');
})

const shareBtn = resultArea.querySelector("#shareBtn");
shareBtn.addEventListener('click', (event) => {
    if (window.navigator.share) {
        window.navigator.share({
            title: '1만 시간의 법칙',
            text: 'Hello World',
            url: 'https://shinsangeun.github.io',
        })
          .then(() => console.log('공유 성공'))
          .catch((error) => console.log('공유 실패', error));
      }
})
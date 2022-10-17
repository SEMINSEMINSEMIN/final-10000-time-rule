const specialtyStr = document.querySelector('#specialty');
const practiceHourStr = document.querySelector('#practiceHour');
const cptBtn = document.querySelector('.computation-btn');
const resultArea = document.querySelector('.computation-result');
const specialtyResStr = resultArea.querySelector('#specialtyResult');
const practiceHourResStr = resultArea.querySelector('#cmptResult');
const loadingArea = document.querySelector('.result_loading')

const inputObj = {};
let calRes;
cptBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseInt(practiceHourStr.value, 10)
    if (specialtyStr.value === '' || Number.isNaN(num) || num === 0 || num < 0){
        window.alert('입력값을 제대로 입력하세요');
    } else {
        inputObj['specialty'] = specialtyStr.value;
        inputObj['practiceHour'] = parseInt(practiceHourStr.value);
        calRes = Math.ceil(10000 / inputObj['practiceHour']);
        specialtyResStr.textContent = inputObj['specialty'];
        practiceHourResStr.textContent = calRes;

        resultArea.classList.remove('show');
        loadingArea.classList.remove('hide');

        setTimeout(() => {
            loadingArea.classList.add('hide');
            resultArea.classList.add('show');
        }, 1300)
    }
});

const modalShowBtn = resultArea.querySelector("#modalShowBtn");
const modalCont = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");

let clickEvent = (function() {
    if ('ontouchend' in document.documentElement === true) {
      return 'touchend';
    } else {
      return 'click';
    }
  })();


modalShowBtn.addEventListener('click', (event) => {
    modalCont.classList.remove('hide');
})

window.addEventListener(clickEvent, (e) => {
    e.target === modalCont ? modalCont.classList.add('hide') : false;
})

const shareBtn = resultArea.querySelector("#shareBtn");
shareBtn.addEventListener('click', (event) => {
    if (window.navigator.share) {
        window.navigator.share({
            title: '1만 시간의 법칙',
            text: 'Hello World',
            url: 'https://seminseminsemin.github.io/final-10000-time-rule/',
        })
          .then(() => console.log('공유 성공'))
          .catch((error) => console.log('공유 실패', error));
      }
    
    const url = window.document.location.href;
    copyToClipboard(url);
})

function copyToClipboard(val) {
    let dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = val;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    window.alert('url이 복사되었습니다.');
  }
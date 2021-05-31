const mainBtn = document.querySelector(".main__menu-btn-temp1");
const mainBtn2 = document.querySelector(".main__menu-btn-temp2");
const mainBtn3 = document.querySelector('.main__menu-btn-temp3');
const mainBtn4 = document.querySelector(".main__menu-btn-temp4");
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const mainMenuLeft = document.querySelector('.main__menu-word1');
const mainBottomFace1 = document.querySelector('.transition__img-left');
const mainBottomFace2 = document.querySelector('.transition__img-center');
const mainBottomFace3 = document.querySelector('.transition__img-right');

/* const mainPizzaImg = document.querySelector('.main__pizza-img'); */

window.onscroll = () => { 
  if (pageYOffset >= 400) {
    right.style.transition = "1s";
    right.style.transform = `translateX(0%)`;
  }
  if (pageYOffset >= 400) {
    left.style.transition = '1s ';
    left.style.transform = `translateX(0%)`;
  }
  if (pageYOffset >= 770) {
    console.log(pageYOffset);
    mainBtn.style.transition = "2s ease-out";
    mainBtn.style.transform = `translateX(0%)`;
  }
  if (pageYOffset >= 1000) {
    mainBtn2.style.transition = "2s ease-out";
    mainBtn2.style.transform = `translateX(0%)`;
  }
  if (pageYOffset >= 1270) {
    mainBtn3.style.transition = '2s ease-out';
    mainBtn3.style.transform  = `translateX(0%)`;
  }
  if (pageYOffset >= 1535) {
    mainBtn4.style.transition = '2s ease-out';
    mainBtn4.style.transform = `translateX(0%)`;
  }
  if (pageYOffset >= 1815) {
    mainBottomFace1.style.transition = '1.5s ease-out';
    mainBottomFace1.style.transform = `translateX(0%)`;
  }
  if (pageYOffset >= 1815) {
    mainBottomFace2.style.transition = '1s ease-out ';
    mainBottomFace2.style.transform = `translateX(0%)`;
  }
  if (pageYOffset >= 1815) {
    mainBottomFace3.style.transition = '1.5s ease-out';
    mainBottomFace3.style.transform = `translateX(0%)`;
  }
};


const headerTitle = document.querySelector('.header__title');
const mainMenuWord = document.querySelector('.main__menu-word');
const mainTitle = document.querySelector('.main__title');
const numberTelTop = document.querySelector('.number');
const callMe = document.querySelector('.call_me');
/* const numberTelBottom = document.querySelector('.call_me,.number2'); */


headerTitle.addEventListener('mouseover', function() {
  headerTitle.classList.add('animate__backInLeft')
  setTimeout(function () {
    headerTitle.classList.remove('animate__backInLeft')
  },1000) 
})

mainMenuWord.addEventListener('mouseover', function() {
  mainMenuWord.classList.add('animate__rotateIn')
  setTimeout(function () {
    mainMenuWord.classList.remove('animate__rotateIn')
  },1000)
})

mainTitle.addEventListener('mouseover', function () {
  mainTitle.classList.add('animate__heartBeat')
  setTimeout(function () {
    mainTitle.classList.remove('animate__heartBeat')
  },1000)
})

callMe.addEventListener('mouseover', function () {
  numberTelTop.classList.add('animate__tada')
  setTimeout (function () {
    numberTelTop.classList.remove('animate__tada')
  },750)
})

const mainBottomFaces = document.querySelectorAll('.main__faces-img');
for(let i = 0; i< mainBottomFaces.length; i++) {
  mainBottomFaces[i].addEventListener('click', function() {
   this.parentElement.querySelector('.main__bottom-coments').classList.toggle('active')
  })

}







function allUp() {
//Сам прогресс Бар
// let progressBar = $('.j-progress-bar');
// console.log("Загрузился Наш пБар: ",progressBar);

// //100% длины прогресс пБара
// let progressWidth = parseInt($('.j-progress-width').width());
// console.log("Вся длина нашего пБара",progressWidth);
// //Текущая длина пБара
// let valueWidth = parseInt($(progressBar).width());
// console.log("Текущая длина пБара: ",valueWidth);


//Текст внутри пБара
// let valueName = parseInt($(progressBar).text());
// console.log("Загрузился текст пБара: ",valueName);
// //Наш процентаж
// let percentVivod = parseInt((valueWidth / progressWidth * 100).toFixed());
// console.log("Текущий процент: ",percentVivod);

//Добавляем кнопки
const buttonOne = $('.j-button-one');
const buttonTwo = $('.j-button-two');
const buttonThree = $('.j-button-three');


   $(buttonOne).click(() => {
      let progressBar = $('.j-progress-bar');
      let valueWidth = parseInt($(progressBar).width())
      let progressWidth = parseInt($('.j-progress-width').width());
      let percentVivod = parseInt((valueWidth / progressWidth * 100).toFixed());
      let valueOne = 1; 
      console.log("Наш процент добавления",valueOne + "%");
      $('.j-progress-bar').width((percentVivod + valueOne) * progressWidth / 100);
      console.log("Текущая длина: ",$('.j-progress-bar').width());
      console.log("Текущий процент: ",percentVivod);
      $(progressBar).text(percentVivod);
      let valueName = parseInt($(progressBar).text());
      if (percentVivod >= 100)
      {
         alert("Это ваш максимум");
      }
   });

   $(buttonTwo).click(() => {
      let progressBar = $('.j-progress-bar');
      let valueWidth = parseInt($(progressBar).width())
      let progressWidth = parseInt($('.j-progress-width').width());
      let valueName = parseInt($(progressBar).text());
      let percentVivod = parseInt((valueWidth / progressWidth * 100).toFixed());
      let valueTwo = 3;
      console.log("Наш процент добавления: ",valueTwo + "%");
      $('.j-progress-bar').width((percentVivod + valueTwo) * progressWidth / 100);
      console.log("Текущая длина: ",$('.j-progress-bar').width());
      console.log("Текущий процент: ",percentVivod);
      $(progressBar).text(percentVivod);
      if (percentVivod >= 100)
      {
         alert("Это ваш максимум");
      }
   });

   $(buttonThree).click(() => {
      let progressBar = $('.j-progress-bar');
      let valueWidth = parseInt($(progressBar).width())
      let progressWidth = parseInt($('.j-progress-width').width());
      let valueName = parseInt($(progressBar).text());
      let percentVivod = parseInt((valueWidth / progressWidth * 100).toFixed());
      let valueThree = 7; 
      console.log("Наш процент добавления: ",valueThree + "%");
      $('.j-progress-bar').width((percentVivod + valueThree) * progressWidth / 100);
      console.log("Текущая длина: ",$('.j-progress-bar').width());
      console.log("Текущий процент: ",percentVivod);
      $(progressBar).text(percentVivod);
      if (percentVivod >= 100)
      {
         alert("Это ваш максимум");
      }
   });

}

$(document).ready(allUp());

let mainBox = document.querySelector('#main-box');

let valueOffsetHorizontal = document.querySelector('#value-offset-horizontal');
let inputOffsetHorizontal = document.querySelector('#input-offset-horizontal');

let valueOffsetVertical = document.querySelector('#value-offset-vertical');
let inputOffsetVertical = document.querySelector('#input-offset-vertical');

let valueBlur = document.querySelector('#value-blur');
let inputBlur = document.querySelector('#input-blur');

let valueSpread = document.querySelector('#value-spread');
let inputSpread = document.querySelector('#input-spread');

let valueShadowColor = document.querySelector('#value-shadow-color');
let inputShadowColor = document.querySelector('#input-shadow-color');

// ESTILOS CSS PARA USUARIO

let styleShadow = document.querySelector('#style-shadow');
let styleWidth = document.querySelector('#style-width');
let styleHeight = document.querySelector('#style-height');
let styleBorderRadius = document.querySelector('#style-border-radius');
let styleBackgroundColor = document.querySelector('#style-background-color');






inputOffsetHorizontal.addEventListener('input', function (e) {
    valueOffsetHorizontal.value = e.target.value;

    mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;

    styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;
  });

valueOffsetHorizontal.addEventListener('input', (e) => {
  inputOffsetHorizontal.value = e.target.value;

  mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;

  styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;
});


inputOffsetVertical.addEventListener('input', (e) => {
  valueOffsetVertical.value = e.target.value;

  mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;

styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;
});

valueOffsetVertical.addEventListener('input', (e) => {
  inputOffsetVertical.value = e.target.value;

  mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;

  styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;
});


inputBlur.addEventListener('input', (e) => {
  valueBlur.value = e.target.value;
  mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;

  styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;
});

valueBlur.addEventListener('input', (e) => {
  inputBlur.value = e.target.value;
  mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;

  styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;
});


inputSpread.addEventListener('input', (e) => {
  valueSpread.value = e.target.value;
  mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;
  styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;
});

valueSpread.addEventListener('input', (e) => {
  inputSpread.value = e.target.value;
  mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;

  styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;
});

inputShadowColor.addEventListener('input', (e) => {
  valueShadowColor.value = e.target.value;

  mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;

  styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${e.target.value};`;

});
valueShadowColor.addEventListener('input', (e) => {
  inputShadowColor.value = e.target.value;

  mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;

  styleShadow.textContent = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${e.target.value};`;
});

mainBox.style.boxShadow = `${valueOffsetHorizontal.value}px ${valueOffsetVertical.value}px ${valueBlur.value}px ${valueSpread.value}px ${valueShadowColor.value};`;



let valueWidth = document.querySelector('#value-width');
let inputWidth = document.querySelector('#input-width');
let valueHeight = document.querySelector('#value-height');
let inputHeight = document.querySelector('#input-height');
let valueBorderRadius = document.querySelector('#value-border-radius');
let inputBorderRadius = document.querySelector('#input-border-radius');
let valueBoxColor = document.querySelector('#value-box-color');
let inputBoxColor = document.querySelector('#input-box-color');



inputWidth.addEventListener('input', (e) => {
  valueWidth.value = e.target.value;

  mainBox.style.width = `${e.target.value}px`;
  styleWidth.textContent =  `${e.target.value}px`;
  

});
valueWidth.addEventListener('input', (e) => {
  inputWidth.value = e.target.value;
  mainBox.style.width = `${e.target.value}px`;
  styleWidth.textContent =  `${e.target.value}px`;
});


inputHeight.addEventListener('input', (e) => {
  valueHeight.value = e.target.value
  mainBox.style.height= `${e.target.value}px`;
  styleHeight.textContent =  `${e.target.value}px`;
});

valueHeight.addEventListener('input', (e) => {
  inputHeight.value = e.target.value
  mainBox.style.height= `${e.target.value}px`;
  styleHeight.textContent =  `${e.target.value}px`;
});


inputBorderRadius.addEventListener('input', (e) => {
  valueBorderRadius.value = e.target.value;
  mainBox.style.borderRadius = `${e.target.value}px`;
  styleBorderRadius.textContent =  `${e.target.value}px`;

});
valueBorderRadius.addEventListener('input', (e) => {
  inputBorderRadius.value = e.target.value;
  mainBox.style.borderRadius = `${e.target.value}px`;
  styleBorderRadius.textContent =  `${e.target.value}px`;
});


inputBoxColor.addEventListener('input', (e) => {
  valueBoxColor.value = e.target.value;
  mainBox.style.backgroundColor = e.target.value;
  styleBackgroundColor.textContent =  `${e.target.value}`;
});

valueBoxColor.addEventListener('input', (e) => {
  inputBoxColor.value = e.target.value;
  mainBox.style.backgroundColor = e.target.value;
  styleBackgroundColor.textContent =  `${e.target.value}`;
});














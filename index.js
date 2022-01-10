// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

// let handleClick = function (event){
//     console.log(event);
// }

let handleClick = event => console.log(event);

document.getElementById('btnToClick').addEventListener('click',handleClick);

document.querySelector('input.click').addEventListener('click',handleClick);



// ****1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

document.querySelector('input.focus').addEventListener('focus',event => console.log(event.target.value));

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

document.querySelector('input.value').addEventListener('input',event => console.log(event.target.value));

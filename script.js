'use strict'

document.addEventListener('DOMContentLoaded', () => {

  // Кнопка по которой происходит клик
  let callBackButton = document.getElementById('callback-button');

  // Модальное окно, которое необходимо открыть
  let modal1 = document.getElementById('modal-1');

  // Кнопка "закрыть" внутри модального окна
  let closeButton = modal1.getElementsByClassName('modal__close-button')[0];

  // Тег body для запрета прокрутки
  // let tagBody = document.getElementsByTagName('body');

  callBackButton.onclick = function(e) {
    e.preventDefault();
    modal1.classList.add('modal_active');
    // tagBody.classList.add('hidden');
  }

  closeButton.onclick = function(e) {
    e.preventDefault();
    modal1.classList.remove('modal_active');
    // tagBody.classList.remove('hidden');
  }

  modal1.onmousedown = function(e) {
    let target = e.target;
    let modalContent = modal1.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      // tagBody.classList.remove('hidden');
    }
  };

  // Вызов модального окна несколькими кнопками на странице
  let buttonOpenModal1 = document.getElementsByClassName('get-modal_1');

  for (let button of buttonOpenModal1) {
    button.onclick = function(e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      // tagBody.classList.add('hidden');
    }
  }

});


let form = document.querySelector('.form__body'),
  formInputs = document.querySelectorAll('.form__input'),
  inputEmail = document.querySelector('.form__input-email'),
  inputPhone = document.querySelector('.form__input-phone'),
  inputCheckbox = document.querySelector('.options__input');


function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.onsubmit = function() {
  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function(input) {
    if (input.value === '') {
      input.classList.add('error');

    } else {
      input.classList.remove('error');
    }
  });

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  if (!validateEmail(emailVal)) {
    console.log('email not valid');
    inputEmail.classList.add('error');
    return false;
  } else {
    inputEmail.classList.remove('error');
  }

  if (validateCountry(emailVal)) {
    console.log('email from Columbia');
    inputEmail.classList.add('error');
    return false;
  } else {
    inputEmail.classList.remove('error');
  }

  if (!validatePhone(phoneVal)) {
    console.log('phone not valid');
    inputPhone.classList.add('error');
    return false;
  } else {
    inputPhone.classList.remove('error');
  }

  if (!inputCheckbox.checked) {
    console.log('checkbox not checked');
    inputCheckbox.classList.add('error');
    return false;
  } else {
    inputCheckbox.classList.remove('error')
  }
}













// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault(); // запрещаю стандартную отправку формы

//     let error = formValidate(form);
//     let formData = new FormData(form);
//     // formData.append('image', formImage.files[0]);

  //   if (error === 0) {
  //     // form.classList.add('_sending');
  //     let response = await fetch('sendmail.php', {
  //       method: 'POST',
  //       body: formData
  //     });
  //     if (response.ok) {
  //       let result = await response.json();
  //       alert(result.message);
  //       // formPreview.innerHTML = '';
  //       form.reset();
  //       // form.classList.remove('_sending');
  //     } else {
  //       alert("Ошибка");
  //       // form.classList.remove('_sending');
  //     }
  //   } else {
  //     alert('Заполните обязательные поля');
  //   }
  // }

  // function formValidate(form) {
  //   let error = 0;
  //   let formReq = document.querySelectorAll('._req');

  //   for (let index = 0; index < formReq.length; index++) {
  //     const input = formReq[index];
  //     formRemoveError(input);

  //     if (input.classList.contains('_tel')) {
  //       if (telTest(input)) {
  //         formAddError(input);
  //         error++;
  //       }
  //     } else if (input.classList.contains('_email')) {
  //       if (emailTest(input)) {
  //         formAddError(input);
  //         error++;
  //       }
  //     }
  //     else {
  //       if (input.value === '') {
  //         formAddError(input);
  //         error++;
  //       }
  //     }
  //   }
  //   return error;
  // }

//   function formAddError(input) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
//   }
//   function formRemoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('error');
//   }

//   // Функции для теста тел и email
//   function telTest(input) {
//     return !/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value);
//   }
//   function emailTest(input) {
//     return !/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(input.value);
//   }
// });
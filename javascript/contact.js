/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/javascript/module/validation.js
const validation = {
    mail: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    phoneon: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-#\s\./0-9]*$/g,
};
let {mail, phoneon} = validation;
const invalidFeedback = (el) => {
    el.classList.add('requiredField-invalid');
    el.nextElementSibling.classList.remove('d-none');
    el.placeholder = '';
}
const validFeedback = (el) => {
    el.classList.remove('requiredField-invalid');
    el.nextElementSibling.classList.add('d-none');
}
function requiredField() {
    const requiredField =document.querySelectorAll('.requiredField')
    // function
    requiredField.forEach((input) => {
        if(input.value === "" || input.value === null) {
            invalidFeedback(input);
        } else {
            validFeedback(input);
        }
    });
}
// 
function emailvalidation() {
    const invalidEmail = document.querySelector('.invalid-email');
    if(!email.value.match(mail)) {
        email.classList.add('requiredField-invalid');
        invalidEmail.classList.remove('d-none');
        email.placeholder = '';
    } else {
        email.classList.remove('requiredField-invalid');
        invalidEmail.classList.add('d-none');
    }
}
// 
function phonevalidation() {
    const invalidPhone = document.querySelector('.invalid-phone');
    if(!phone.value.match(phoneon)) {
        phone.classList.add('requiredField-invalid');
        invalidPhone.classList.remove('d-none');
        phone.placeholder = '';
    } else {
        phone.classList.remove('requiredField-invalid');
        invalidPhone.classList.add('d-none');
    }
}
// other textarea1
function otherTextarea1Fun() {
    const otherTextarea1 = document.querySelector('#other-textarea1');
    if(otherTextarea1.disabled === false) {
        if(otherTextarea1.value === "" || otherTextarea1.value === null) {
            invalidFeedback(otherTextarea1);
        } else {
            validFeedback(otherTextarea1);
        }
    }
}
// 
function otherCheckbox() {
    const otherOption = document.querySelector('#other-option');
    const otherTextarea1 = document.querySelector('#other-textarea1');
    otherOption.checked = false
    otherOption.addEventListener('change', () => {
        if(otherOption.checked) {
            otherTextarea1.disabled = false;
        } else {
            otherTextarea1.disabled = true;
            if(otherTextarea1.disabled === false) {
                if(otherTextarea1.value === "" || otherTextarea1.value === null) {
                    invalidFeedback(otherTextarea1);
                } else {
                    validFeedback(otherTextarea1);
                }
            }    
        }
        if(otherOption.checked === false) {
            validFeedback(otherTextarea1);
        }
    });
    otherTextarea1.addEventListener('change', () => {
        if(otherTextarea1.value === "" || otherTextarea1.value === null) {
            invalidFeedback(otherTextarea1);
        } else {
            validFeedback(otherTextarea1);
        }
    });
}
function multipleCheckbox(checkName, requiredFieldClass) {
    const checkBoxes = document.querySelectorAll(checkName);
    const invalCheckbox = document.querySelector(requiredFieldClass);
    let error = true;
    checkBoxes.forEach(item => {
        if (item.checked) { 
            error = false;
        }
    });
    if (error) {
        invalCheckbox.classList.remove('d-none');
    } else {
        invalCheckbox.classList.add('d-none');
    }
}
;// CONCATENATED MODULE: ./src/javascript/contact.js

const submitBtn = document.querySelector('#submit-btn');
const contact_email = document.querySelector('#email');
const contact_phone = document.querySelector('#phone');
// phone change
contact_phone.addEventListener('change', () => {
    phonevalidation();
});
// email change
contact_email.addEventListener('change', () => {
    emailvalidation();
});
submitBtn.addEventListener('click', () => {    
    requiredField();
    phonevalidation();
    emailvalidation();
    otherTextarea1Fun();
})
// other checkbox on and off function
otherCheckbox();

/******/ })()
;
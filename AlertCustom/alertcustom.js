'use stsrict'

var container = document.querySelector('.alert_wrap');
var btnWrap = document.querySelector('.btn_wrap');
var alertWrap = document.querySelector('.alert_wrap');

var customAlert = ['아이디를 체크하세요', '비밀번호를 체크하세요', '기타 체크하세요'];

btnWrap.addEventListener('click', function (e) {
    var elem = e.target;
    var elemIndex = [].indexOf.call(elem.parentNode.children, elem);

    createCustomAlert(customAlert[elemIndex]);
})

function createCustomAlert(alertSrc) {
    var divbox = document.createElement('div');

    divbox.classList.add('custom_alert');
    divbox.innerHTML = alertSrc;
    alertWrap.appendChild(divbox);

    setTimeout(function() {
        customAlertAddClass(divbox);
    }, 0)

    setTimeout(function() {
        customAlertDelete(divbox);
    }, 3000)

    if (2 < document.querySelectorAll('.custom_alert').length) {
        console.log('3개이상');
        customAlertDelete(document.querySelectorAll('.custom_alert')[0]);
    }
}

function customAlertAddClass(target) {
    target.classList.add('on');
}

function customAlertDelete(target) {
    target.classList.add('removing');
    target.addEventListener('animationend', function () {
        target.remove();
    })
}
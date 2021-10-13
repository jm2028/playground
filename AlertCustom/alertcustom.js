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
    var currentAlerts = document.querySelectorAll('.custom_alert:not(.removing)')
    var removingAlerts = document.querySelectorAll('.custom_alert.removing');

    divbox.classList.add('custom_alert');
    divbox.innerHTML = alertSrc;
    alertWrap.appendChild(divbox);

    if (2 < currentAlerts.length) {
        customAlertDelete(currentAlerts[0], true);
    }

    if (1 <= removingAlerts.length) {
        console.log(removingAlerts.length);
    }

    setTimeout(function() {
        customAlertAddClass(divbox);
    }, 0)

    setTimeout(function() {
        customAlertDelete(divbox);
    }, 3000)
}

function customAlertAddClass(target) {
    target.classList.add('on');
}

function customAlertDelete(target, bool) {
    target.classList.add('removing');
    target.addEventListener('animationend', function () {
        target.remove();
    })
    
    if (true == bool) {
        target.classList.add('over');
    }
}
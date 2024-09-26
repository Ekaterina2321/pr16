"use strict";

let tabBtns = document.querySelectorAll('.tab__btn')
let tabTexts = document.querySelectorAll('.tab__text')

tabBtns.forEach((item, index) => {
    item.addEventListener('click', function () {
        document.querySelector('.tab__btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab__text.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})


let tabButtons = document.querySelectorAll('.tab-button');
let tabs = document.querySelectorAll('.tab');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));

        button.classList.add('active');
        let tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});



let phone = document.querySelector(".item-view");
let contacts = document.querySelector(".contacts");

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                phone.classList.add("show");
            } else {
                phone.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.5,
    }
);

observer.observe(contacts);






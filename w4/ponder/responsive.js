"use strict";
const menuButton = document.querySelector('.menu-btn');
if (menuButton)
    menuButton.addEventListener("click", (event) => {
        let nav = document.querySelector('nav');
        if (nav) {
            //if (nav.style.display === '')
            //    nav.style.display = 'flex';
            //else
            //    nav.style.display = '';
            nav.style.display = nav.style.display === '' ? 'flex' : '';
            //nav.style.flexDirection = nav.style.flexDirection === '' ? 'column' : '';
        }
        document.querySelectorAll('a').forEach(el => {
            // Commented these out as I figured just having css rules would lead to less clutter on the active page, that and it's probably more efficient?
            // That and when transistioning between screen sizes, having the js injected styles clear is nice

            el.style.display = el.style.display === '' ? 'initial' : '';
            //el.style.textAlign = el.style.textAlign === '' ? 'center' : '';
            //el.style.borderTop = el.style.borderTop === '' ? '1px solid gray' : '';
        });
        menuButton.classList.toggle('change');
    });
//function toggleMenuLinks(event) {
//}

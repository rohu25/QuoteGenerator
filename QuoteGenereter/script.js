"use strict";

const quoteTxt = document.querySelector('.quote');
const authorTxt = document.querySelector('.author');
const btnQuote = document.querySelector('.but');

async function randomQuote() {
    const data = await fetch('https://api.quotable.io/random');
    const result = await data.json();
    const {content,author} = result;
    quoteTxt.textContent = content;
    authorTxt.textContent = author;
    btnQuote.textContent = "New Quote"
}

btnQuote.addEventListener('click',randomQuote);
$(document).ready(function() {
    headerChange();
    paragraphAlert();
    listClick();
    inputToggle();
});

const headerChange = () => {
    $('header').hover(function() {
        $(this).css('color', 'red');
        $(this).css('background-color', 'purple');
    }, function() {
        $(this).css('color', 'black');
        $(this).css('background-color', 'rgb(218, 176, 40)');
    });
}
const paragraphAlert = () => {
    $('p').text(function() {
        $(this).click(function() {
            $(this).text('jQuery is a fast, JavaScript library\
            that makes many tasks easier and simpler to accomplish. \
            A JavaScript library contains pre-written JavaScript which\
            makes developing applications a bit easier for the developer.\
            This means jQuery is not a language, but an extension of JavaScripit.\
            It takes many lines of JavaScript code, which we would have had\
            to write ourselves before jQuery, and compresses it.');
        });
        $(this).dblclick(function() {
            $(this).text('Click here to learn more about jQuery!')
        });
    });
}
const listClick = () => {
    $('li').dblclick(function() {
        $(this).hide();
    });
}
const inputToggle = () => {
    $('input').keydown(function() {
        $(this).toggleClass('input');
    });
}
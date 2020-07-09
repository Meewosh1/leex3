var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/leeleelee.jpg') {
        myImage.setAttribute ('src', 'images/leeleelee2.png');
    } else {
        myImage.setAttribute ('src', 'images/leeleelee.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Indian Tech Support , ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Indian Tech Support , ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}

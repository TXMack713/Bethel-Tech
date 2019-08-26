
function regexChecker() {
    let first_Name = document.getElementById('firstName').value;
    let last_Name = document.getElementById('lastName').value;
    let firstNameRegex = /^[A-Z][a-zA-Z]+$/;
    let lastNameRegex = /^[A-Z][a-zA-Z]+$/;
    if(first_Name.match(firstNameRegex) && last_Name.match(lastNameRegex)){
        alert('Yay! Your inputs were all correct!');
        console.log(true);
        console.log('Yay! The user\'s inputs were all correct!');
    
    }
    else {
        alert('Oh no! That\'s an invalid format!');
        console.log(false);
        console.log('Oh no! The user\'s input was invalid!');
    }
}
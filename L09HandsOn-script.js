const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText); 
        //Create a function to display Albert Einstein's name and birthday
    const displayInfo = () => {
        document.getElementById("name").innerHTML = myObj.name;
        document.getElementById("birthday").innerHTML = myObj.birthday;
    };
    displayInfo();
    //Display Einstein's bio upon button click
    let myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function() {
        document.getElementById("project").innerHTML = myObj.bio;
    });
    }
};
xhttp.open("GET", "einstein.json", true);
xhttp.send();





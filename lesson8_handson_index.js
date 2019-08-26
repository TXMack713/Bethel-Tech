function nameInfo(){
    var firstName = document.getElementById("First Name").value;
    var middleName = document.getElementById("Middle Name").value;
    var lastName = document.getElementById("Last Name").value;
    var fullName = firstName+" "+middleName+" "+ lastName;

    document.getElementById("fullName").innerHTML = fullName;
}
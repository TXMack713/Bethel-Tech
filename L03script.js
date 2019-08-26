let highSchoolGrade = 11;
let yourGrade;

function updateGrade(){
    switch (highSchoolGrade){
        case 9:
            yourGrade = "Freshman"
            console.log("You're a " + yourGrade);
            break;
        case 10:
            yourGrade = "Sophomore"
            console.log("You're a " + yourGrade);
            break;
        case 11:
            yourGrade = "Junior"
            console.log("You're a " + yourGrade);
            break;
        case 12:
            yourGrade = "Senior"
            console.log("You're a " + yourGrade);
            break;
        default:
            yourGrade = "Invalid"
            console.log("Your grade level is " + yourGrade);
    }    

}
updateGrade();

function name(){
  let firstName = "Samuel";
  document.getElementById("demo").innerHTML = firstName === "John" ? "Hello John!" : "Hello Human!";
}
name();
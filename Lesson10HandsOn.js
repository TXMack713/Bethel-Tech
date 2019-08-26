$(document).ready(function(){
    $('#gitHub').hover(function(){
        $(this).addClass('logos');
    }, function () {
        $(this).removeClass('logos');
    });
});

const displayRepo = () => {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status== 200) {
        let gitHubObj = JSON.parse(this.responseText);
        for (let spot = 0; spot<=gitHubObj.length; spot++) {
            let repoItem = document.createElement('li');
            let repos = document.getElementById('repos');
            repoItem.innerHTML = gitHubObj[spot].name;
            repos.appendChild(repoItem);
            continue;
        };
    }
};
xhttp.open("GET", "https://api.github.com/users/txmack713/repos", true);
xhttp.send();
};
displayRepo();
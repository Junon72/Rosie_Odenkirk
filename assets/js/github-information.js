function fetchGitHubInformation(event) {
    var username = $("#gh-username").val();
    if(!username) {
        $("#gh-user-data").html(`<2h>Please enter a GitHub username</2h>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..."/>
        </div>`);  

}
